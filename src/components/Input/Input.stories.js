import Input from './Input'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/Input',
  component: Input,
}

const Template = args => <Input {...args} />

export const InputField = Template.bind({})
InputField.args = {
  labelText: 'labelText',
  placeholder: 'Input field with placeholder text',
}
