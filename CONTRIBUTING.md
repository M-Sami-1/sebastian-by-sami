# Contributing

Thanks for helping improve SEBASTIAN by SAMI. Bug fixes, accessibility improvements, documentation, and focused UI enhancements are welcome.

## Before you start

- For a substantial change, open an issue first so the scope can be agreed on.
- Check existing issues and pull requests for related work.
- Do not commit credentials, `.env` files, personal data, local staging folders, `node_modules`, or `dist/` output.

## Local setup

Requirements: Node.js 18 or newer and npm.

```sh
git clone https://github.com/M-Sami-1/sebastian-by-sami.git
cd sebastian-by-sami
npm install
npm run dev
```

Vite prints the local URL when the server starts.

## Make and verify a change

1. Create a branch with a short descriptive name.
2. Keep changes focused and follow the existing React/CSS patterns.
3. Check responsive layouts at 320px, phone, tablet, and desktop widths when UI is affected.
4. Check keyboard use and reduced-motion behavior when adding interactions or animation.
5. Run `npm run build` and resolve any errors.
6. Update the README when setup, behavior, or project structure changes.

## Menu and image changes

- Menu data lives in `public/menu.json`. Keep IDs unique and use existing category names unless the category filter is updated too.
- Store browser-served assets in `public/assets/` and reference them with root-relative URLs.
- Only contribute assets you created or have permission to redistribute. Include attribution and license details where required.

## Pull requests

Include:

- What changed and why.
- How the change was checked.
- Screenshots or a short recording for visual changes.
- Asset attribution or licensing details for new media.

Keep the pull request focused; separate unrelated cleanup into another change.
