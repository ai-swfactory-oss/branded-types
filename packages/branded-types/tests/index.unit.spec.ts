import { describe, expect, it } from 'vitest'

import { isNonEmptyString } from '../src/index'

describe('isNonEmptyString', () => {
  it('accepts a non-empty string', () => {
    expect(isNonEmptyString('abc')).toBe(true)
  })

  it('rejects the empty string', () => {
    expect(isNonEmptyString('')).toBe(false)
  })

  it('rejects a value that is not a string', () => {
    expect(isNonEmptyString(42)).toBe(false)
  })
})
