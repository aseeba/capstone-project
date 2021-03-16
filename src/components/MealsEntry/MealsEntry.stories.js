import React from 'react'
import MealEntry from './MealsEntry'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'MealEntry',
  component: MealEntry,
  argTypes: {
    authorColor: { control: 'color' },
  },
}

const Template = args => <MealEntry {...args} />

export const Primary = Template.blind({})

Primary.args = {
  authorColor: '',
  text: 'This is an example for a meal entry',
}
