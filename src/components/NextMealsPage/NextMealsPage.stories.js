import NextMealsPage from './NextMealsPage'
import React from 'react'
import { action } from '@storybook/addon-actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/Pages',
  component: NextMealsPage,
}

const Template = args => <NextMealsPage {...args} />
export const NextMeals = Template.bind({})

NextMeals.args = {
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
