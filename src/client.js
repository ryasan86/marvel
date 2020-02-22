import { baseUrl } from './constants'

export const getAllCharacters = async () => {
  try {
    const queryStr = [`?ts=1`, `limit=40`, `apikey=${process.env.PUBLIC_KEY}`, `hash=${process.env.MD5}`].join('&')
    const response = await fetch(baseUrl + `v1/public/characters` + queryStr)
    const { data } = await response.json()
    return data
  } catch (err) {
    console.error('Oops an error has occurred: ', err)
  }
}
