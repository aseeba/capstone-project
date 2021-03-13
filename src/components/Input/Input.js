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
  margin-bottom: 20px;
  border: none;
  border-radius: 30px;
  padding: 10px;
  background-color: var(--color-transparent-white);
  color: var(--color-darkgreen);
  ::placeholder {
    color: var(--color-darkgreen);
    text-align: center;
    font-size: 0.8em;
  }
  text-align: center;
  font-size: 0.8em;
`
