import React, { useEffect, useState } from 'react'
import { getAllCharacters } from './client'
import './App.css'

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const data = await getAllCharacters()
      setCharacters(data.results)
    }
    getCharacters()
  }, [])

  return (
    <div className='app'>
      <ul className='character-list'>
        {characters.map((c, i) => (
          <li key={i} className='character-item'>
            <p>{c.name}</p>
            <img src={`${c.thumbnail.path}/portrait_xlarge.jpg`} alt={c.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
