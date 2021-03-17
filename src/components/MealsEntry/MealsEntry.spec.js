import { render, screen } from '@testing-library/react'
import MealEntry from './MealsEntry'

describe('MealEntry', () => {
  it('renders meal data from props', () => {
    render(
      <MealEntry
        mealList={{
          breakfast: 'Smoothie',
          lunch: 'Salmon wrap',
          dinner: 'Scrambled eggs',
          snack: 'Apple',
        }}
      />
    )
    expect(screen.getByText('Smoothie')).toBeInTheDocument()
    expect(screen.getByText('Salmon wrap')).toBeInTheDocument()
    expect(screen.getByText('Scrambled eggs')).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()
  })
})
