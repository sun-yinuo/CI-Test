// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  // 2. 配置 ESLint
  eslint: {
    config: {
      // 开启 stylistic，这会自动处理缩进、引号、分号等格式化问题
      // 相当于内置了 Prettier
      stylistic: {
        indent: 2, // 2格缩进
        quotes: 'single', // 单引号
        semi: false, // 无分号 (Vue/TS 社区主流)
      },
    },
  },
})
