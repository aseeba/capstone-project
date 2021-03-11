import { render } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom'

import Input from './Input'

describe('Input', () => {
  it('should render input fields without crashing', () => {
    const div = document.createElement('div')
    render(<Input />, div)
    unmountComponentAtNode(div)
  })
})
