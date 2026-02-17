import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        // 允许在测试文件中直接使用 describe, it, expect 而不需要手动 import
        globals: true,
        environment: 'happy-dom',
    },
})