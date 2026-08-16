

import sharp from "sharp";
const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");

// Run from the project root: node scripts/generate-og-image.mjs

// Pre-process the avatar: square crop, rounded corners, as PNG data URI
const AVATAR_SIZE = 220;
const RADIUS = 24;
const roundedMask = Buffer.from(
  `<svg width="${AVATAR_SIZE}" height="${AVATAR_SIZE}"><rect width="${AVATAR_SIZE}" height="${AVATAR_SIZE}" rx="${RADIUS}" ry="${RADIUS}" fill="#fff"/></svg>`
);
const avatarPng = await sharp(`${ROOT}/src/images/avatar1.jpg`)
  .resize(AVATAR_SIZE, AVATAR_SIZE, { fit: "cover" })
  .composite([{ input: roundedMask, blend: "dest-in" }])
  .png()
  .toBuffer();
const avatarURI = `data:image/png;base64,${avatarPng.toString("base64")}`;

const MONO = "Menlo, Monaco, 'Courier New', monospace";
const SANS = "Helvetica, Arial, sans-serif";

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="75%">
      <stop offset="0%" stop-color="#1f75fe" stop-opacity="0.38"/>
      <stop offset="45%" stop-color="#1f75fe" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#1f75fe" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="88%" cy="100%" r="55%">
      <stop offset="0%" stop-color="#1f75fe" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#1f75fe" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- background -->
  <rect width="1200" height="630" fill="#121212"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <!-- subtle grid -->
  <g stroke="#ffffff" stroke-opacity="0.035">
    ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * 63}" y1="0" x2="${i * 63}" y2="630"/>`).join("")}
    ${Array.from({ length: 11 }, (_, i) => `<line x1="0" y1="${i * 63}" x2="1200" y2="${i * 63}"/>`).join("")}
  </g>

  <!-- glass card -->
  <rect x="70" y="95" width="1060" height="440" rx="28"
        fill="#ffffff" fill-opacity="0.04"
        stroke="#ffffff" stroke-opacity="0.12" stroke-width="1.5"/>

  <!-- avatar -->
  <image x="140" y="205" width="${AVATAR_SIZE}" height="${AVATAR_SIZE}" xlink:href="${avatarURI}"/>
  <rect x="140" y="205" width="${AVATAR_SIZE}" height="${AVATAR_SIZE}" rx="${RADIUS}"
        fill="none" stroke="#1f75fe" stroke-opacity="0.55" stroke-width="2"/>

  <!-- availability pill -->
  <rect x="420" y="170" width="430" height="44" rx="22"
        fill="#1c1f26" fill-opacity="0.85"
        stroke="#ffffff" stroke-opacity="0.16" stroke-width="1"/>
  <circle cx="446" cy="192" r="6" fill="#22c55e"/>
  <text x="466" y="199" font-family="${MONO}" font-size="19" fill="#d1d5db">Available for new opportunities</text>

  <!-- name + title -->
  <text x="420" y="298" font-family="${MONO}" font-size="64" font-weight="bold" fill="#f3f4f6">Charles Ugbor</text>
  <text x="420" y="352" font-family="${MONO}" font-size="30" fill="#1f75fe">Fullstack Software Engineer</text>

  <!-- tagline -->
  <text x="420" y="412" font-family="${SANS}" font-size="23" fill="#9ca3af">I build fast, accessible web applications with</text>
  <text x="420" y="446" font-family="${SANS}" font-size="23" fill="#9ca3af">React, Next.js, Vue, and Astro.</text>

  <!-- url -->
  <text x="140" y="490" font-family="${MONO}" font-size="22" fill="#6b7280">www.trulynedum.dev</text>

  <!-- call-to-action button -->
  <rect x="855" y="452" width="235" height="52" rx="12" fill="#1f75fe"/>
  <text x="972" y="486" text-anchor="middle" font-family="${MONO}" font-size="21" fill="#ffffff">View portfolio →</text>

  <!-- accent underline -->
  <rect x="420" y="368" width="120" height="4" rx="2" fill="#1f75fe" fill-opacity="0.85"/>
</svg>`;

await sharp(Buffer.from(svg), { density: 144 })
  .resize(1200, 630)
  .png()
  .toFile(`${ROOT}/public/og-image.png`);

const meta = await sharp(`${ROOT}/public/og-image.png`).metadata();
console.log("Written:", meta.width, "x", meta.height);
