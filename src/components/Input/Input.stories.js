import Input from './Input'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/3-Inputs',
  component: Input,
}

const Template = args => <Input {...args} />

export const MealInput = Template.bind({})
MealInput.args = {
  labelText: 'Breakfast:',
  placeholder: 'Input field with placeholder text',
}
