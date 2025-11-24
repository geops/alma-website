# alma Website

Official website for **alma** – the modern, web-based solution for managing contaminated sites (Kataster belasteter Standorte).

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

## 🏗️ Project Structure

```
/
├── public/          # Static assets (favicon, images, etc.)
├── src/
│   ├── components/  # Reusable Astro components
│   │   └── Button.astro
│   ├── fonts/       # Local font files (Satoshi)
│   ├── images/      # Image assets
│   ├── pages/       # Page routes
│   │   ├── index.astro    # Default page (redirects to /de)
│   │   ├── de.astro       # German version
│   │   ├── fr.astro       # French version
│   │   └── it.astro       # Italian version
│   ├── lib.ts       # Utility functions (i18n, etc.)
│   ├── tailwind.css # Tailwind CSS configuration
│   └── translations.json  # All translatable content
└── package.json
```

## 🌍 Internationalization (i18n)

The website supports three languages: **German (de)**, **French (fr)**, and **Italian (it)**.

### How Translation Works

All translatable content is stored in `src/translations.json` using a flat structure with dot notation:

```json
{
  "de": {
    "navigation.about": "Über alma",
    "header.heading": "Einfach. Sicher. Gemeinsam entwickelt."
  }
}
```

### Using Translations in Components

```astro
---
import { useTranslations } from "../lib.ts";

const t = useTranslations(Astro.currentLocale);
---

<h1>{t("header.heading")}</h1>
```

### Translation Key Convention

Keys follow a hierarchical naming pattern:

- `navigation.*` - Navigation items
- `header.*` - Header section content
- `about.*` - About section content
- `feature.*` - Feature section content
  - `feature.data.*` - Data management feature
  - `feature.geodata.*` - Geodata feature
  - `feature.workflow.*` - Workflow feature
  - `feature.export.*` - Export feature

## 📝 Content Management

### For Content Managers

All website content can be edited in a single file: **`src/translations.json`**

#### Editing Text Content

1. Open `src/translations.json`
2. Find the key you want to edit (e.g., `"header.heading"`)
3. Update the text for each language (`de`, `fr`, `it`)
4. Save the file

#### HTML in Translations

Some content includes HTML tags for formatting:

```json
"header.description": "alma unterstützt Behörden bei <strong>der Führung des Katasters</strong>"
"feature.data.list": "<li><strong>Item 1</strong></li><li>Item 2</li>"
```

- `<strong>` - Bold text
- `<li>` - List items
- `<br />` - Line break

### Adding New Content

1. Add a new key in `src/translations.json` for all three languages
2. Use the key in your Astro component with `t("your.new.key")`

## 🎨 Styling

The project uses **Tailwind CSS v4** with custom configuration:

- Custom colors defined in `src/tailwind.css`
- Satoshi font family (locally hosted)

### Custom Theme

```css
@theme {
  --color-gray-1: #d9d9d9;
  /* Add more custom colors here */
}
```

## 🛠️ Tech Stack

- **Framework:** [Astro 5](https://astro.build/) - Static site generator
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- **Fonts:** Satoshi (locally hosted)
- **Package Manager:** pnpm
- **Formatting:** Prettier with Astro and Tailwind plugins

## 🤝 Contributing

### For Developers

1. Create a new branch from `main`
2. Make your changes
3. Run `pnpm format` to format code
4. Test locally with `pnpm dev`
5. Create a pull request

### Code Style

- Use Prettier for formatting (run `pnpm format`)
- Follow existing component patterns
- Use TypeScript for type safety
- Keep components small and reusable

## 📄 License

[Add license information here]

## 🔗 Links

- [alma Demo](https://demo.alma-os.ch/)
- [Repository](https://github.com/geops/alma-website)
