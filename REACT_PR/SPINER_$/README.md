# 🎰 Spin & Win

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**A mystery box game — open boxes, collect prizes, avoid the bomb! 💀**

</div>

---

## ✨ Features

- 🎁 **Mystery Boxes** — 3 boxes, koi prize dega koi bomb
- 💥 **Bomb = Reset** — ek galat box aur sab kuch zero
- 📊 **Live Score** — smooth tick-up animation ke saath total update hota hai
- 🎉 **Win Detection** — saare safe boxes open karo toh trophy milti hai
- ✨ **Particle Effects** — click pe colorful particles phoot te hain
- 🌌 **Ambient Orbs** — floating glow background mein
- 📦 **AddPriceBox** — alag se prices add karne ka calculator widget
- 🔄 **Instant Restart** — ek click mein fresh game

---

## 🎮 How to Play

1. **3 boxes** screen pe dikhenge
2. Kisi bhi box pe **click karo**
3. Box **shake** karega phir reveal hoga
4. 💰 **Prize mila?** — total mein add ho jaayega
5. 💀 **Bomb mila?** — BOOM, sab reset!
6. Saare safe boxes kholo toh **🏆 You Won!**
7. **Restart** button se naya game shuru karo

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm ya pnpm

### Installation

```bash
# Repo clone karo
git clone <your-repo-url>
cd SPINER_$

# Dependencies install karo
npm install

# Dev server chalao
npm run dev
```

App open hogi at → **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
SPINER_$/
├── src/
│   ├── components/
│   │   ├── AddPriceBox.tsx   # Price calculator widget
│   │   ├── BoxData.tsx       # Box config & types
│   │   └── PriceBox.tsx      # Individual mystery box
│   ├── App.tsx               # Main game logic & layout
│   ├── index.css             # Global styles (Tailwind)
│   └── main.tsx              # Entry point
├── public/
│   └── torch.png
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🧩 Component Overview

### `BoxData.tsx`
Box ka data aur types define karta hai. Yahan se boxes add/remove/edit karo.

```ts
{ id: 1, title: "Box 1", price: 299 }   // Prize box
{ id: 3, title: "Box 3", price: null }  // 💀 Bomb
```

### `PriceBox.tsx`
- Hover pe **lift + shimmer** effect
- Click pe **shake animation** phir reveal
- Prize box → `revealPop` animation
- Bomb → red glow pulse

### `AddPriceBox.tsx`
- Collapsible calculator widget
- 2 custom price inputs + stored price
- Focus glow on inputs
- Animated total reveal

### `App.tsx`
- Smooth **score tick-up** (requestAnimationFrame style)
- **Particle burst** on every box open
- **Progress bar** — kitne boxes khule
- Win / Game Over **badge** with animation
- Floating **ambient orbs** background

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#0a0818 → #1a1040 → #0d1b2a` |
| Primary | `#4f46e5` (Indigo) |
| Accent | `#7c3aed` (Violet) |
| Success | `#4ade80` (Green) |
| Danger | `#f87171` (Red) |
| Text Primary | `#e0e7ff` |
| Text Muted | `#6b7280` |
| Glass | `rgba(255,255,255,0.04)` + `backdrop-filter: blur` |

---

## 🛠 Tech Stack

| Tool | Version | Use |
|------|---------|-----|
| React | 19 | UI framework |
| TypeScript | 5.9 | Type safety |
| Vite | 8.0 | Build tool |
| Tailwind CSS | 4.0 | Utility styles |

---

## 📜 Scripts

```bash
npm run dev       # Development server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint check
```

---

## 🔧 Customization

**Boxes badlne ke liye** → `src/components/BoxData.tsx` edit karo:

```ts
export const boxList: BoxItem[] = [
  { id: 1, title: "Box 1", price: 500 },   // prize amount badlo
  { id: 2, title: "Box 2", price: 1000 },
  { id: 3, title: "Box 3", price: null },   // null = bomb
  { id: 4, title: "Box 4", price: 250 },   // naya box add karo
];
```

---

<div align="center">

Made with 💜 using React + TypeScript + Vite

</div>
