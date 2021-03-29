import styled from 'styled-components/macro'

export default function Input({
  labelText,
  placeholder,
  name,
  mealListValue,
  onChange,
}) {
  return (
    <Label htmlfor="">
      {labelText}
      <MealInput
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={mealListValue}
        type="text"
        pattern="^(?!\s*$).+"
        maxLength="80"
      ></MealInput>
    </Label>
  )
}

const Label = styled.label`
  margin-bottom: 10px;
  display: grid;
  color: white;
  height: 100%;
  text-align: center;
  font-size: 0.7em;
  z-index: 100;
`
const MealInput = styled.input`
  border: none;
  border-radius: 8px;
  padding: 5px;
  background-color: var(--color-transparent-white);
  color: var(--color-dark-bluegrey);
  border-bottom: 3px solid var(--color-green);
  outline: none;
  text-align: center;
  z-index: 0;
  ::placeholder {
    color: var(--color-dark-bluegrey);
    text-align: center;
    font-size: 0.9em;
    opacity: 0.6;
  }
  &:focus {
    outline: none;
    border-bottom: var(--border-bottom);
    box-shadow: var(--box-shadow);
  }
`
