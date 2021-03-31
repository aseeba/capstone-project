import React from 'react'
import DateEntry from './DateEntry'
import { action } from '@storybook/addon-actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/Meals',
  component: DateEntry,
}
const Template = args => <DateEntry {...args} />
export const MealDateNavigation = Template.bind({})
MealDateNavigation.args = {
  date: 2021 - 3 - 31,
  mealList: {
    breakfast: 'Smoothie',
    lunch: 'Salmon wrap',
    dinner: 'Scrambled eggs',
    snack: 'Apple',
  },
  daily: 2,
  onPreviousDay: action('onPreviousDay'),
  onNextDay: action('onNextDay'),
}
