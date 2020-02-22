import characters from './utils/charactersSample.js'

export const getAllCharacters = () => {
  return new Promise((resolve, reject) => {
    // Simulate an API fetch
    setTimeout(() => resolve(characters), 2000)
  })
}

describe('mock requests', () => {
  it('can fetch characters', () => {})
})
