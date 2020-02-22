import React from 'react'
import CharactersList from '../components/CharactersList'
import Search from '../components/Search'

const CharactersPage = () => {
  return (
    <div className='max-width'>
      <div className='controls'>
        <Search></Search>
      </div>
      <CharactersList></CharactersList>
    </div>
  )
}

export default CharactersPage
