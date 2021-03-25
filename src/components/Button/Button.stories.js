import Button from './Button'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Primary Button',
  isActive: false,
}
