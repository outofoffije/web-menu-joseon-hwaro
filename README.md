# Joseon Hwaro menu concept

A standalone static restaurant menu with 49 dishes, original menu images, and a four-language entry screen: Korean, English, Indonesian, and Simplified Chinese.

Hangul dish names remain visible in every language. The description below each name, navigation, and interface copy change with the selected language. The language button reopens the selector. The selector appears on every page load.

## Run locally

No install or build step is required. From this folder:

```sh
python3 -m http.server 8765 --directory dist
```

Open http://localhost:8765.

## Files

- `dist/index.html`: page markup, Korean dish names, prices, and menu sections.
- `dist/style.css`: responsive layout and language screen.
- `dist/language.js`: language selection and interface translations.
- `dist/translations.js`: descriptions for all 49 dishes in all four languages, keyed by dish code.
- `dist/assets/`: bundled restaurant logo and menu images.
- `menu.json`: original menu reference. It is not loaded at runtime; changing it alone does not update the page.
- `.openai/hosting.json`: existing private Sites deployment association; unnecessary on other static hosts.

## Editing

Change prices and Korean names in `dist/index.html`. Change dish descriptions in `dist/translations.js`, keeping all four language keys. Edit navigation and other interface text in `dist/language.js`. Add or remove dishes consistently in the markup and translations.

## Hosting

Serve `dist` as the public directory on any static host. There is no server API, database, login, package dependency, or mandatory paid service. All menu assets are local. No Notion API key or GitHub secret belongs in this repository.

## Content and demo status

This is an independent design concept, not an endorsed restaurant website. Menu text and photos were taken from the supplied public Notion menu, and the logo was supplied by the user. Existing brand and image rights remain with their respective owners. No license to restaurant assets is granted by this project.

Menu prices are a snapshot, not live Notion data. New English, Korean descriptions, and Simplified Chinese translations should be reviewed by the restaurant before official use. The original Indonesian description for D-5 used “Hati Sapi”; the localized description uses “Jantung Sapi” to match the Korean name 염통 (heart).

The page includes a noindex directive and concept notice. GitHub upload and public hosting are separate actions.
