import MealForm from './MealForm'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'MealForm',
  component: MealForm,
}

const Template = () => <MealForm />

export const MealFormStory = Template.blind({})
