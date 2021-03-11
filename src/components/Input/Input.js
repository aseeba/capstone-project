import styled from 'styled-components/macro'

export default function Input({
  labelText,
  placeholder,
  name,
  autoFocus,
  required,
}) {
  return (
    <Label>
      {labelText}
      <InputStyled
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        type="text"
        maxLength="85"
        required="required"
      />
    </Label>
  )
}

const Label = styled.label`
  display: grid;
  gap: 4px;
  color: white;
  text-align: center;
`
const InputStyled = styled.input`
  border: solid 1px var(--color-green);
  border-radius: 8px;
  padding: 15px;
  background-color: white;
  color: var(--color-darkgreen);
  ::placeholder {
    color: var(--color-darkgreen);
    text-align: center;
  }
  text-align: center;
  font-size: 0.8em;
  margin-bottom: 20px;
  opacity: 0.5;
`
