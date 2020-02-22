import React from 'react'
import CharactersList from './components/CharactersList'
import './styles/App.css'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='app'>
      <NavBar></NavBar>
      <div className='max-width'>
        <CharactersList></CharactersList>
      </div>
    </div>
  )
}

export default App
