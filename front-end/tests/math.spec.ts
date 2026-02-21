import { describe, expect, it } from 'vitest'

import { add } from '../src/utils/math'

describe('math Utils', () => {
  it('应该能正确计算 1 + 1', () => {
    expect(add(1, 1)).toBe(2)
  })
})
