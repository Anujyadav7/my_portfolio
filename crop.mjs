import sharp from "sharp";
import path from "path";

async function makeSquareIcon() {
  const inputPath = "C:/Users/Anuj Yadav/Downloads/my photo.png";
  const outputPath1 = path.resolve("./public/icon.png");
  const outputPath2 = path.resolve("./app/icon.png");

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    const size = Math.min(metadata.width || 512, metadata.height || 512);

    // Create a circular SVG mask
    const circleSvg = `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" /></svg>`;

    const buffer = await image
      .resize(size, size, {
        fit: "cover",
        position: "top", // Keep face focused
      })
      .composite([
        {
          input: Buffer.from(circleSvg),
          blend: "dest-in",
        },
      ])
      .png()
      .toBuffer();

    await sharp(buffer).toFile(outputPath1);
    await sharp(buffer).toFile(outputPath2);

    console.log("Successfully created circular favicon with user photo!");
  } catch (error) {
    console.error("Error creating icon:", error);
  }
}

makeSquareIcon();
