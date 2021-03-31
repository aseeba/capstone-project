import Button from './Button'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/Button',
  component: Button,
}

const Template = args => <Button {...args}>★&nbsp; Button &nbsp;★</Button>

export const Primary = Template.bind({})
Primary.args = {
  active: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
