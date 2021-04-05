import React from 'react'
import MealEntry from './MealEntry'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/Meals',
  component: MealEntry,
  argTypes: {
    authorColor: { control: 'color' },
  },
}

const Template = args => <MealEntry {...args} />

export const MealEntryGroup = Template.bind({})

MealEntryGroup.args = {
  date: '2021-03-31',
  mealList: {
    breakfast: 'Smoothie',
    lunch: 'Salmon wrap',
    dinner: 'Scrambled eggs',
    snack: 'Apple',
  },
  daily: 2,
}
