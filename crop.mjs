import sharp from "sharp";
import path from "path";

async function makeSquareIcon() {
  const inputPath = path.resolve("./public/profile.webp");
  const outputPath = path.resolve("./public/icon.png");

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Find the shortest side to make a square
    const size = Math.min(metadata.width, metadata.height);

    // Create a circular SVG mask
    const circleSvg = `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" /></svg>`;

    await image
      .resize(size, size, {
        fit: "cover",
        position: "top", // Assuming face is near top
      })
      .composite([
        {
          input: Buffer.from(circleSvg),
          blend: "dest-in",
        },
      ])
      .png()
      .toFile(outputPath);

    console.log("Successfully created perfectly circular favicon icon.png!");
  } catch (error) {
    console.error("Error creating icon:", error);
  }
}

makeSquareIcon();
