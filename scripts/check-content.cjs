const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const content = require("../src/redesign/content.json");
const assets = require("../src/redesign/assets.json");
let count = 0;
for (const [name, page] of Object.entries(content)) {
  if (!page.blocks.length) throw new Error("Missing content: " + name);
  count += page.blocks.length;
  for (const key of [
    "modernKitchens",
    "teamMembers",
    "kitchenStyles",
    "carouselItems",
  ]) {
    for (const item of page[key] || []) {
      for (const image of [
        item.image,
        item.coverImage,
        ...(item.images || []),
      ].filter(Boolean)) {
        if (!assets[image]) throw new Error("Missing image mapping: " + image);
      }
    }
  }
}
const source = fs.readFileSync(path.join(root, "src/redesign/Site.js"), "utf8");
for (const match of source.matchAll(/["'](\/Images\/[^"']+)["']/g)) {
  if (!assets[match[1]]) throw new Error("Missing page image: " + match[1]);
}
for (const [original, choices] of Object.entries(assets)) {
  if (!fs.existsSync(path.join(root, "originals/assets", original)))
    throw new Error("Missing original: " + original);
  for (const choice of choices) {
    if (!fs.existsSync(path.join(root, "public", choice.url)))
      throw new Error("Missing optimized image: " + choice.url);
    const bytes = fs.readFileSync(path.join(root, "public", choice.url));
    if (
      bytes.length < 20 ||
      bytes.toString("ascii", 0, 4) !== "RIFF" ||
      bytes.toString("ascii", 8, 12) !== "WEBP"
    )
      throw new Error("Invalid optimized image: " + choice.url);
  }
}
for (const file of [
  "public/Dller_Brochure.pdf",
  "public/optimized/video.mp4",
  "public/optimized/video1.mp4",
  "originals/assets/Images/video.mp4",
  "originals/assets/Images/video1.mp4",
]) {
  if (!fs.existsSync(path.join(root, file)))
    throw new Error("Missing asset: " + file);
}
if (content["AboutUs/OurTeam.js"].teamMembers.length !== 6)
  throw new Error("Incomplete team");
console.log(
  `Content inventory passed: ${count} text blocks, ${Object.keys(assets).length} original images, 6 team members, all kitchen project galleries, brochure and both videos.`,
);
