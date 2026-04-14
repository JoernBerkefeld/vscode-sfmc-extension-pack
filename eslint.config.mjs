import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import jsdoc from 'eslint-plugin-jsdoc';
import js from '@eslint/js';

export default [
    {
        ignores: ['**/node_modules/**'],
    },
    js.configs.recommended,
    eslintPluginPrettierRecommended,
    jsdoc.configs['flat/recommended'],
    eslintPluginUnicorn.configs.recommended,
    {
        files: ['**/*.mjs'],
        languageOptions: {
            ecmaVersion: 2025,
            sourceType: 'module',
            globals: {
                ...globals.nodeBuiltin,
            },
        },
        rules: {
            'unicorn/prefer-module': 'off',
            'jsdoc/require-jsdoc': 'off',
            'jsdoc/require-param-type': 'off',
        },
    },
    {
        files: ['extension.js'],
        languageOptions: {
            globals: {
                ...globals.nodeBuiltin,
            },
            ecmaVersion: 2025,
            sourceType: 'commonjs',
        },
        rules: {
            'unicorn/prefer-module': 'off',
            'jsdoc/require-jsdoc': 'off',
        },
    },
];
