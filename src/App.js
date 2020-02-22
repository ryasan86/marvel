import React from 'react'
import CharactersList from './components/CharactersList'
import './styles/App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='max-width'>
        <CharactersList></CharactersList>
      </div>
    </div>
  )
}

export default App
