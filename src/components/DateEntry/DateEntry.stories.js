import React from 'react'
import DateEntry from './DateEntry'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/4-Meals',
  component: DateEntry,
}

const Template = args => (
  <DateEntry
    {...args}
    date={'HEUTE'}
    mealList={{
      breakfast: 'Smoothie',
      lunch: 'Salmon wrap',
      dinner: 'Scrambled eggs',
      snack: 'Apple',
    }}
  />
)

export const MealDateNavigation = Template.bind({})
