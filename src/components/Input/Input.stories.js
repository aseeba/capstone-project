import Input from './Input'

export default {
  title: 'Input',
  component: Input,
}

export const base = () => (
  <Input
    labelText="Frühstück:"
    name="Breakfast"
    placeholder="Was möchte ich zum Frühstück essen?"
    autofocus="autofocus"
    required="required"
  />
)
