import { PactV4 } from '@pact-foundation/pact'
import * as path from 'node:path'
import { describe, expect, it } from 'vitest'

const pact = new PactV4({
  consumer: 'Frontend-Nuxt',
  provider: 'Backend-SpringBoot',
  dir: path.resolve(process.cwd(), 'pacts'),
})

// 👉 1. 定义你期望后端返回的数据结构
interface UserResponse {
  id: number
  username: string
  email: string
}

describe('用户模块契约', () => {
  it('定义获取用户详情的接口格式', async () => {
    await pact
      .addInteraction()
      .given('用户 1 存在')
      .uponReceiving('请求 ID 为 1 的用户信息')
      .withRequest('GET', '/api/users/3')
      .willRespondWith(200, (builder) => {
        builder.jsonBody({
          id: 3,
          username: 'las',
          email: 'test@example.com',
        })
      })
      .executeTest(async (mockServer) => {
        const res = await fetch(`${mockServer.url}/api/users/3`)
        expect(res.status).toBe(200)

        // 👉 2. 使用 as 关键字进行类型断言，消除 any 魔咒
        const data = (await res.json()) as UserResponse

        // 此时 TypeScript 清楚地知道 data 里有 username，报错消失！
        expect(data.username).toBe('las')
      })
  })
})
