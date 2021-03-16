import Button from './Button'

export default {
  title: 'Capstone Project/Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  buttonText: 'Primary Button',
  isActive: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  buttonText: 'Secondary Button',
  isActive: true,
}
