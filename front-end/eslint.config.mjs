// @ts-check
import antfu from '@antfu/eslint-config'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  await antfu({
    name: 'laslog/antfu',

    ignores: [
      'pacts/**',
      'coverage/**',
      '.nuxt/**',
      '.output/**',
      'dist/**',
    ],

    formatters: true,
    vue: true, // To enable accessibility in Vue, use the option {a11y: true}

    // 👉 关键改动：将解析器配置直接注入到底层的 typescript 对象中
    typescript: {
      tsconfigPath: 'tsconfig.json',
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.ts', '*.js'],
        },
      },
    },

    rules: {
      'perfectionist/sort-imports': ['warn', { type: 'alphabetical' }],
      'vue/block-lang': ['error', { script: { lang: ['ts'] } }],
      'vue/enforce-style-attribute': ['error', { allow: ['scoped', 'module'] }],
    },
  }),
  {
    name: 'laslog/custom',
    rules: {
      'nuxt/prefer-import-meta': 'error',
    },
  },
)
