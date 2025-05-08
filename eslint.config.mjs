// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

const eslintConfig = withNuxt({});

export default {
    ...eslintConfig,
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
};
