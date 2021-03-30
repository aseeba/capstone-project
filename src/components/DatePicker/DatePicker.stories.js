import DatePicker from './DatePicker'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Capstone Project/3-Inputs',
  component: DatePicker,
}

const Template = args => <DatePicker {...args} />

export const DateInput = Template.bind({})
DateInput.args = {
  autoFocus: true,
}
