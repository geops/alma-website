// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Satoshi",
        cssVariable: "--font-satoshi",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/fonts/Satoshi-Regular.woff2"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/fonts/Satoshi-Medium.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/fonts/Satoshi-Bold.woff2"],
          },
        ],
      },
    ],
  },
  i18n: {
    defaultLocale: "de",
    locales: ["de", "fr", "it"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
