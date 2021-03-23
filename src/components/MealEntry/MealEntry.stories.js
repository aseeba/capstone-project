import React from 'react'
import MealEntry from './MealsEntry'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/MealEntry',
  component: MealEntry,
  argTypes: {
    authorColor: { control: 'color' },
  },
}

const Template = args => (
  <MealEntry
    {...args}
    mealList={{
      breakfast: 'Smoothie',
      lunch: 'Salmon wrap',
      dinner: 'Scrambled eggs',
      snack: 'Apple',
    }}
  />
)

export const MealEntryGroup = Template.bind({})
MealEntryGroup.args = {
  Text: 'Add a meal here',
}
