import { render, screen } from '@testing-library/react'
import MealForm from './MealForm'

describe('MealForm', () => {
  it('renders a form with four inputs', () => {
    render(<MealForm />)
    expect(screen.getByLabelText('Frühstück:')).toBeInTheDocument()
    expect(screen.getByLabelText('Mittagessen:')).toBeInTheDocument()
    expect(screen.getByLabelText('Abendessen:')).toBeInTheDocument()
    expect(screen.getByLabelText('Zwischenmahlzeit:')).toBeInTheDocument()
  })
})
