import { render, screen } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom'

import Input from './Input'

describe('Input', () => {
  it('should render input fields without crashing', () => {
    const div = document.createElement('div')
    render(<Input />, div)
    unmountComponentAtNode(div)
  })

  it('renders a label and an input', () => {
    render(
      <Input
        labelText="Mittagessen:"
        placeholder="Was möchte ich zum Mittag essen?"
        name="lunch"
      />
    )
    const input = screen.getByLabelText('Mittagessen:')
    expect(input).toHaveAttribute(
      'placeholder',
      'Was möchte ich zum Mittag essen?'
    )
    expect(input).toHaveAttribute('name', 'lunch')
  })
})
