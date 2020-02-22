import { baseUrl } from './constants'
import { publicKey, md5 } from './config/config'

export const getAllCharacters = async () => {
  try {
    const queryStr = [`?ts=1`, `limit=40`, `apikey=${publicKey}`, `hash=${md5}`].join('&')
    const response = await fetch(baseUrl + `v1/public/characters` + queryStr)
    const { data } = await response.json()
    return data
  } catch (err) {
    console.error('Oops an error has occurred: ', err)
  }
}
