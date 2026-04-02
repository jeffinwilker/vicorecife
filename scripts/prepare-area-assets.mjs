import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

const files = [
  "area-imunidade.webp",
  "area-hipertrofia.webp",
  "area-sono.webp",
  "area-descanso.webp",
  "area-equilibrio.webp",
  "area-beleza.webp",
];

for (const file of files) {
  const input = path.join(root, "public", "vicofarma", "images", file);
  const output = path.join(
    root,
    "public",
    "vicofarma",
    "images",
    file.replace(".webp", "-hq.webp"),
  );

  await sharp(input)
    .resize({
      width: 900,
      height: 1200,
      fit: "cover",
      position: "centre",
      withoutEnlargement: false,
    })
    .modulate({
      brightness: 1.02,
      saturation: 1.04,
    })
    .sharpen({
      sigma: 1.1,
      m1: 0.8,
      m2: 2,
      x1: 2,
      y2: 10,
      y3: 18,
    })
    .webp({
      quality: 86,
      effort: 6,
    })
    .toFile(output);

  console.log(`prepared ${path.basename(output)}`);
}
