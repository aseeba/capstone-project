import PlanMealsPage from './PlanMealsPage'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/Pages',
  component: PlanMealsPage,
}

const Template = args => <PlanMealsPage />

export const PlanMeals = Template.bind({})

PlanMeals.args = {
  labelText: 'labelText',
  placeholder: 'Input field with placeholder text',
}
