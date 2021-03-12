import { render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('shows a different color when isActive is true', () => {
    const { rerender, container } = render(<Button>Test</Button>)
    const defaultColor = getComputedStyle(container.firstChild).backgroundColor
    rerender(<Button isActive>Test</Button>)
    const otherColor = getComputedStyle(container.firstChild).backgroundColor

    expect(defaultColor).not.toBe(otherColor)
  })
})
