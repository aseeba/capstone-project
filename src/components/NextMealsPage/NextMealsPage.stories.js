import NextMealsPage from './NextMealsPage'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/1-Pages',
  component: NextMealsPage,
}

const Template = args => (
  <NextMealsPage
    {...args}
    daily={[0]}
    mealList={{
      date: '[0].2021-01-01',
      breakfast: 'Smoothie',
      lunch: 'Salmon wrap',
      dinner: 'Scrambled eggs',
      snack: 'Apple',
    }}
  />
)

export const NextMeals = Template.bind({})
NextMeals.args = {}
