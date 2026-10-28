# Setup and Run Guide

This guide gets **SEBASTIAN by SAMI** running locally. The app is a React and Vite frontend; it does not need API keys, a database, or a backend service for the current demo features.

## Requirements

- Node.js 18 or newer
- npm (included with Node.js)
- Git, if you plan to clone the repository

Check your installation:

```bash
node --version
npm --version
```

## Get the project

```bash
git clone https://github.com/M-Sami-1/sebastian-by-sami.git
cd sebastian-by-sami
```

If you already have the project folder, open a terminal in that folder instead.

## Install dependencies

```bash
npm install
```

## Start the development site

```bash
npm run dev
```

Open the local URL printed by Vite. By default, this project uses:

```text
http://localhost:3000/
```

Vite reloads the page when you save source changes. Press `Ctrl+C` in the terminal to stop the development server.

## Build and preview a production version

Create the optimized static build:

```bash
npm run build
```

Preview that build locally:

```bash
npm run preview
```

Open the preview URL printed by Vite. The generated `dist/` folder is build output; it is ignored by Git and should not be committed.

## Useful project locations

- `src/` — React pages, components, state, and styles
- `public/menu.json` — menu items and their image paths
- `public/assets/` — brand and dish images
- `package.json` — available npm commands and dependencies

To add a dish image, place it under `public/assets/` and use a root-relative path in `public/menu.json`, for example `/assets/food/example.jpg`.

## Troubleshooting

- **Port 3000 is busy:** stop the other process using it, or start Vite on another port with `npm run dev -- --port 3001` and open the URL Vite prints.
- **Dependencies are missing or inconsistent:** run `npm install` again from the project folder.
- **Menu images do not load:** check that the path in `public/menu.json` exactly matches a file under `public/assets/`, then refresh the page.
- **A route fails after deployment:** configure the static host to serve `index.html` for app routes such as `/menu`, `/item/1`, and `/cart`.

## Demo behavior

Menu browsing, favourites, cart, and the pickup receipt work in the browser. The current project does not send orders or newsletter signups to a live service and does not process payments.
