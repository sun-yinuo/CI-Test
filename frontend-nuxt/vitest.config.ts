import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        // 允许在测试文件中直接使用 describe, it, expect 而不需要手动 import
        globals: true,
        environment: 'happy-dom',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'lcov'], // 必须包含 lcov 格式
            reportsDirectory: './coverage', // 报告生成的位置
            // 建议排除掉不需要统计覆盖率的目录
            exclude: ['node_modules/**', '.nuxt/**', 'dist/**', 'tests/**']
        }
    },
})
