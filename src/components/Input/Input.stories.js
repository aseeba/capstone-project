import Input from './Input'

export default {
  title: 'Input',
  component: Input,
}

export const InputField = () => (
  <Input
    labelText="labelText:"
    name="Breakfast"
    placeholder="Input field with placeholder text"
    autofocus="autofocus"
    required="required"
  />
)
