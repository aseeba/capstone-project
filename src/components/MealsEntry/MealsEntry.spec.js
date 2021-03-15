import { render, screen } from '@testing-library/react'
import MealsEntry from './MealsEntry'

describe('MealsEntry', () => {
  it('renders game data from props', () => {
    const { container } = render(
      <MealsEntry
        players={[
          { name: 'John', score: 10 },
          { name: 'Jane', score: 20 },
        ]}
      />
    )
    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.getByText('Jane')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
