import Button from './Button'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/2-Buttons',
  component: Button,
}

const Template = args => <Button {...args}>★&nbsp; Button &nbsp;★</Button>

export const Primary = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
