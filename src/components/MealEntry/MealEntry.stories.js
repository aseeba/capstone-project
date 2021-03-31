import React from 'react'
import MealEntry from './MealEntry'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/4-Meals',
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
