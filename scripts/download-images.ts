import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const srcPath = 'src/data/products.ts';
const outDir = 'public/images';
mkdirSync(outDir, { recursive: true });

const source = readFileSync(srcPath, 'utf8');
const urlRe =
  /https:\/\/lh3\.googleusercontent\.com\/aida-public\/[A-Za-z0-9_-]+/g;
const allUrls = [...source.matchAll(urlRe)].map((m) => m[0]);
const uniqueUrls = [...new Set(allUrls)];
console.log(`Found ${allUrls.length} URL refs, ${uniqueUrls.length} unique`);

const urlToLocal = new Map<string, string>();
let extraCounter = 0;

function assign(url: string, name: string) {
  if (!urlToLocal.has(url)) {
    urlToLocal.set(url, name);
  }
  return urlToLocal.get(url)!;
}

const heroMatch = source.match(
  /export const HERO_IMAGE_URL =\s*\n?\s*'(https:[^']+)'/
);
if (heroMatch) assign(heroMatch[1], 'hero.jpg');

for (const cat of ['Hombres', 'Mujeres', 'Accesorios'] as const) {
  const re = new RegExp(`${cat}:\\s*\\n?\\s*'(https:[^']+)'`);
  const m = source.match(re);
  if (m) assign(m[1], `category-${cat.toLowerCase()}.jpg`);
}

const productBlocks = [
  ...source.matchAll(/id:\s*'([^']+)'[\s\S]*?images:\s*\[([\s\S]*?)\]/g),
];
for (const block of productBlocks) {
  const id = block[1];
  const imgs = [...block[2].matchAll(/'(https:[^']+)'/g)].map((x) => x[1]);
  imgs.forEach((url, i) => {
    if (!urlToLocal.has(url)) {
      assign(url, `${id}-${i + 1}.jpg`);
    }
  });
}

for (const url of uniqueUrls) {
  if (!urlToLocal.has(url)) {
    extraCounter += 1;
    assign(url, `extra-${extraCounter}.jpg`);
  }
}

console.log(`Mapped ${urlToLocal.size} files`);

async function download(url: string, filename: string) {
  let finalName = filename;
  const dest = path.join(outDir, filename);

  if (existsSync(dest)) {
    const size = Bun.file(dest).size;
    if (size > 1000) {
      console.log(`skip ${filename}`);
      return true;
    }
  }

  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; TropicalVibesDownloader/1.0)',
      Accept: 'image/*,*/*',
    },
  });

  if (!res.ok) {
    console.error(`FAIL ${res.status} ${filename}`);
    return false;
  }

  const ctype = res.headers.get('content-type') || '';
  if (ctype.includes('png')) {
    finalName = filename.replace(/\.jpg$/, '.png');
  } else if (ctype.includes('webp')) {
    finalName = filename.replace(/\.jpg$/, '.webp');
  }

  const buf = Buffer.from(await res.arrayBuffer());
  const finalDest = path.join(outDir, finalName);
  await Bun.write(finalDest, buf);

  if (finalName !== filename) {
    urlToLocal.set(url, finalName);
  }

  console.log(
    `ok ${finalName} (${(buf.length / 1024).toFixed(1)} KB) [${ctype}]`
  );
  return true;
}

let ok = 0;
let fail = 0;

for (const [url, filename] of urlToLocal) {
  const success = await download(url, filename);
  if (success) ok += 1;
  else fail += 1;
}

let rewritten = source;
for (const [url, filename] of urlToLocal) {
  rewritten = rewritten.split(url).join(`/images/${filename}`);
}

writeFileSync(srcPath, rewritten);
writeFileSync(
  'scripts/image-map.json',
  JSON.stringify(Object.fromEntries(urlToLocal), null, 2)
);

console.log(`Done: ${ok} ok, ${fail} fail`);
console.log('Updated', srcPath);
