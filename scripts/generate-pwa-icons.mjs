import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const iconsDir = join(root, "public", "icons");
const BG = { r: 9, g: 9, b: 11, alpha: 1 }; // #09090b

async function loadMasterPng() {
  const localSource = join(iconsDir, "icon-source.png");
  if (existsSync(localSource)) {
    return sharp(localSource)
      .resize(1024, 1024, { fit: "cover" })
      .flatten({ background: BG })
      .png()
      .toBuffer();
  }

  const svg = readFileSync(join(iconsDir, "icon.svg"));
  return sharp(svg).resize(1024, 1024).png().toBuffer();
}

async function writeTransparentMark(masterPng) {
  const { data, info } = await sharp(masterPng)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    if (max < 45 && b - r < 25) {
      data[i + 3] = 0;
    }
  }

  const png = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 5 })
    .resize(512, 512, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  writeFileSync(join(iconsDir, "logo-mark.png"), png);
}

const masterPng = await loadMasterPng();
await writeTransparentMark(masterPng);

async function writeResized(name, size) {
  const png = await sharp(masterPng).resize(size, size, { fit: "cover" }).png().toBuffer();
  writeFileSync(join(iconsDir, name), png);
  return png;
}

await writeResized("favicon-16.png", 16);
await writeResized("favicon-32.png", 32);
await writeResized("apple-touch-icon.png", 180);
await writeResized("icon-192.png", 192);
await writeResized("icon-512.png", 512);

const favicon32 = readFileSync(join(iconsDir, "favicon-32.png"));
writeFileSync(join(root, "public", "favicon.ico"), favicon32);
writeFileSync(join(iconsDir, "favicon.png"), favicon32);

for (const size of [192, 512]) {
  const inset = Math.round(size * 0.14);
  const inner = size - inset * 2;
  const mark = await sharp(masterPng)
    .resize(inner, inner, { fit: "contain", background: BG })
    .png()
    .toBuffer();

  const png = await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BG,
    },
  })
    .composite([{ input: mark, left: inset, top: inset }])
    .png()
    .toBuffer();

  writeFileSync(join(iconsDir, `maskable-icon-${size}.png`), png);
}

// Keep vector favicon in sync with the raster mark
const icon512 = readFileSync(join(iconsDir, "icon-512.png"));
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <image width="512" height="512" href="data:image/png;base64,${icon512.toString("base64")}"/>
</svg>
`;
writeFileSync(join(iconsDir, "icon.svg"), svg);

console.log("PWA icons generated (favicon, apple-touch, 192/512, maskable, logo-mark).");
