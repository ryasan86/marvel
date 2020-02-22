import React from 'react'
import { render } from '@testing-library/react'
import CharactersList from '../components/CharactersList'

describe('<CharacterList></CharacterList>', () => {
  it('renders a collection', () => {
    const { container } = render(<CharactersList></CharactersList>)
  })
})
