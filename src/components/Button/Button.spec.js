import { render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('shows a different font-size when isActive is true', () => {
    const { rerender, container } = render(<Button>Test</Button>)
    const defaultFontSize = getComputedStyle(container.firstChild).fontSize
    rerender(<Button isActive>Test</Button>)
    const otherFontSize = getComputedStyle(container.firstChild).fontSize

    expect(defaultFontSize).not.toBe(otherFontSize)
  })
})
