// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-config-prettier";

const config = await withNuxt();

config.push({
  name: "prettier",
  ...prettier,
});

export default config;
