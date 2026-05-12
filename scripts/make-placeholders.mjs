// Generates SVG placeholder images that mimic the look-and-feel of the Figma
// design (warm dark / sand / gold palette). Run once with `node scripts/make-placeholders.mjs`.
// All output goes to /public/images. Replace any of these files with real
// PNG/JPG exports from Figma — same filename, any image extension is fine
// because the components reference them by base path.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, '..', 'public', 'images');
mkdirSync(outDir, { recursive: true });

function svg({ w, h, label, palette = 'warm', tone = 'mid' }) {
  const palettes = {
    warm: {
      light: ['#F0E4D2', '#D4BD9C'],
      mid: ['#C9A878', '#7A5A3A'],
      dark: ['#3D1F18', '#210302'],
    },
    cool: {
      light: ['#E8E4DE', '#B8B0A5'],
      mid: ['#6F7886', '#3C4452'],
      dark: ['#1B2230', '#0A0E16'],
    },
    sky: {
      light: ['#C9D6E2', '#7C97B5'],
      mid: ['#4A6685', '#27384E'],
      dark: ['#1A2738', '#08111F'],
    },
  };
  const [c1, c2] = palettes[palette][tone];
  const id = Math.random().toString(36).slice(2, 8);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" width="${w}" height="${h}">
  <defs>
    <linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
    <radialGradient id="r${id}" cx="0.3" cy="0.2" r="0.9">
      <stop offset="0" stop-color="${c1}" stop-opacity="0.6"/>
      <stop offset="1" stop-color="${c2}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g${id})"/>
  <rect width="${w}" height="${h}" fill="url(#r${id})"/>
  <g opacity="0.18" fill="#fff" font-family="serif" font-style="italic">
    <text x="${w / 2}" y="${h / 2}" text-anchor="middle" font-size="${Math.min(w, h) / 12}">${label}</text>
  </g>
</svg>`;
}

const placeholders = [
  // hero
  { name: 'hero-tower.svg', w: 720, h: 850, label: 'Tower hero', palette: 'sky', tone: 'dark' },
  { name: 'hero-tower-2.svg', w: 760, h: 615, label: 'Tower side', palette: 'cool', tone: 'mid' },
  { name: 'hero-cloud.svg', w: 905, h: 540, label: 'Cloud overlay', palette: 'cool', tone: 'light' },
  // urban-living
  { name: 'dining-1.svg', w: 540, h: 360, label: 'Dining 1', palette: 'warm', tone: 'mid' },
  { name: 'dining-2.svg', w: 540, h: 360, label: 'Dining 2', palette: 'warm', tone: 'dark' },
  { name: 'dining-3.svg', w: 540, h: 140, label: 'Dining 3', palette: 'warm', tone: 'light' },
  { name: 'urban-blur.svg', w: 810, h: 460, label: 'Blur backdrop', palette: 'warm', tone: 'light' },
  // space to live
  { name: 'interior-sofa.svg', w: 530, h: 630, label: 'Living interior', palette: 'warm', tone: 'mid' },
  { name: 'skyline.svg', w: 645, h: 630, label: 'City skyline', palette: 'sky', tone: 'mid' },
  { name: 'studio-badge.svg', w: 340, h: 280, label: 'Studio badge', palette: 'warm', tone: 'light' },
  // lifestyle wellness
  { name: 'gym.svg', w: 1440, h: 780, label: 'Gym wellness', palette: 'warm', tone: 'mid' },
  { name: 'deco-2.svg', w: 270, h: 255, label: 'Deco 2', palette: 'warm', tone: 'light' },
  // backed by experience
  { name: 'interior-dark.svg', w: 1440, h: 1100, label: 'Dark interior', palette: 'warm', tone: 'dark' },
  { name: 'lifestyle-detail.svg', w: 645, h: 430, label: 'Lifestyle detail', palette: 'warm', tone: 'mid' },
  { name: 'experience-small.svg', w: 320, h: 400, label: 'Experience inset', palette: 'warm', tone: 'dark' },
  { name: 'deco-1.svg', w: 220, h: 210, label: 'Deco 1', palette: 'warm', tone: 'light' },
  // your city
  { name: 'city-night.svg', w: 1440, h: 850, label: 'City at night', palette: 'cool', tone: 'dark' },
  { name: 'moon.svg', w: 130, h: 150, label: 'Moon', palette: 'cool', tone: 'light' },
  // logos
  { name: 'bh-logo-dark.svg', w: 220, h: 30, label: 'bh-homes', palette: 'warm', tone: 'dark' },
  { name: 'bh-logo-light.svg', w: 110, h: 48, label: 'bh', palette: 'warm', tone: 'light' },
];

for (const p of placeholders) {
  const xml = svg(p);
  writeFileSync(resolve(outDir, p.name), xml);
  console.log('wrote', p.name);
}
