import React, { useEffect, useState } from 'react'
import CharacterItem from './CharacterItem'
import Loader from './Loader'
import ErrorBoundary from './ErrorBoundary'
import { getAllCharacters } from '../client'
import '../styles/CharactersList.css'

const CharactersList = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAllCharacters()
      .then(c => {
        setCharacters(c.data.results)
        setIsLoading(false)
      })
      .catch(e => {
        setError(e)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className='center-container'>
      <ErrorBoundary error={error}>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <ul className='characters-list'>
            {characters.map((c, i) => (
              <CharacterItem key={c.name} c={c}></CharacterItem>
            ))}
          </ul>
        )}
      </ErrorBoundary>
    </div>
  )
}

export default CharactersList
