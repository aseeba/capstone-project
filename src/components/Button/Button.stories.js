import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Primary = () => <Button>Button</Button>
export const Secondary = () => <Button>&#10003; Button</Button>
