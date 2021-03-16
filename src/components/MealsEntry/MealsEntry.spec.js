import { render, screen } from '@testing-library/react'
import MealsEntry from './MealsEntry'

describe('MealsEntry', () => {
  it('renders meal data from props', () => {
    const { container } = render(
      <MealsEntry
        mealList {
          breakfast: "Smoothie", 
          lunch: "Salmon wrap", 
          dinner: "Scrambled eggs", 
          snack: "Apple"
        }
      />
    )
    expect(screen.getByText('Smoothie')).toBeInTheDocument()
    expect(screen.getByText('Salmon wrap')).toBeInTheDocument()
    expect(screen.getByText('Scrambled eggs')).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()
  })
})
