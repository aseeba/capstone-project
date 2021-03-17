import Button from './Button'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  buttonText: 'Primary Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  buttonText: '&#10003; Secondary Button',
}
