import MealForm from './MealForm'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/MealForm',
  component: MealForm,
}

const Template = args => <MealForm {...args} />

export const MealFormGroup = Template.bind({})
MealFormGroup.args = {
  labelText: 'labelText',
  placeholder: 'Input field with placeholder text',
}
