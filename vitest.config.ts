import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['test/simple.test.ts'],
    threads: false,
  },
})
