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
  mealList: [
    {
      date: '2021-03-31',
      breakfast: 'Smoothie',
      lunch: 'Salmon wrap',
      dinner: 'Scrambled eggs',
      snack: 'Apple',
    },
  ],
  daily: 0,
  onPreviousDay: action('onPreviousDay'),
  onNextDay: action('onNextDay'),
}
