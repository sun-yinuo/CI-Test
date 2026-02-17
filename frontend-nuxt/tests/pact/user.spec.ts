import { describe, it, expect } from 'vitest'
import { PactV4 } from '@pact-foundation/pact'
// 建议改用 node:path 这种更现代的写法
import * as path from "node:path"

const pact = new PactV4({
    consumer: 'Frontend-Nuxt',
    provider: 'Backend-SpringBoot',
    dir: path.resolve(process.cwd(), 'pacts'),
})

describe('用户模块契约', () => {
    it('定义获取用户详情的接口格式', async () => {
        // 注意：这里去掉了 pact 前面的 await，只保留给整个链条执行
        await pact
            .addInteraction()
            .given('用户 1 存在')
            .uponReceiving('请求 ID 为 1 的用户信息')
            .withRequest('GET', '/api/users/2')
            .willRespondWith(200, (builder) => {
                builder.jsonBody({
                    id: 2,
                    username: 'las',
                    email: 'test@example.com'
                })
            })
            .executeTest(async (mockServer) => {
                const res = await fetch(`${mockServer.url}/api/users/1`)
                expect(res.status).toBe(200)
                const data = await res.json()
                expect(data.username).toBe('las')
            })
    })
})