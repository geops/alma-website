import { type Config } from "prettier";

const config: Config = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindFunctions: ["tw"],
};

export default config;
