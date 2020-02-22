import React from 'react'
import PropTypes from 'prop-types'
import '../styles/CharacterItem.css'

const CharacterItem = ({ c }) => {
  return (
    <li className='character-item'>
      <p>{c.name}</p>
      <img src={`${c.thumbnail.path}/portrait_xlarge.jpg`} alt={c.name} />
    </li>
  )
}

CharacterItem.propTypes = {
  c: PropTypes.object.isRequired
}

export default CharacterItem
