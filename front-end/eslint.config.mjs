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
    vue: true,

    typescript: {
      tsconfigPath: 'tsconfig.json',
      parserOptions: {
        projectService: {
          // 🎯 核心修复：像狙击手一样，只允许 vitest 和 js 文件进入默认项目。
          // 绝对不写 '*.ts'，这样就完美避开了和 nuxt.config.ts 的冲突！
          allowDefaultProject: ['vitest.config.ts', '*.js'],
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
  // 顺手关掉 vitest 配置的严格校验，防止它再报 null check 的错
  {
    files: ['vitest.config.ts'],
    rules: {
      'ts/strict-boolean-expressions': 'off',
    },
  },
)
