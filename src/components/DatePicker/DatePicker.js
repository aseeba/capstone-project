import styled from 'styled-components/macro'
import Calendar from '../../assets/calendar.svg'

export default function Date({
  labelText,
  name,
  autoFocus,
  required,
  placeholder,
}) {
  return (
    <DateWrapper>
      <Label>
        {labelText}
        <CalendarIcon />
        <DateInput
          type="date"
          id="date-input"
          placeholder={placeholder}
          name={name}
          autoFocus={autoFocus}
          required={required}
        />
      </Label>
    </DateWrapper>
  )
}

const DateWrapper = styled.section`
  display: grid;
  margin: 20px 0 0 0;
`
const Label = styled.label`
  position: relative;
  display: grid;
  color: white;
  text-align: center;
  font-size: 0.7em;
  margin-bottom: 0;
`
const DateInput = styled.input`
  margin-bottom: 30px;
  margin-top: 0px;
  border: none;
  border-radius: 8px;
  border-bottom: 3px solid var(--color-green);
  background: var(--color-transparent-white);
  outline: none;
  padding: 10px;
  color: var(--color-dark-bluegrey);
  ::placeholder {
    color: var(--color-dark-bluegrey);
    text-align: center;
    opacity: 0.6;
  }
  &:focus {
    outline: none;
    border-bottom: var(--border-bottom);
    box-shadow: var(--box-shadow);
  }
  text-align: center;
  font-size: 1em;
  z-index: 10;
`

const CalendarIcon = styled.span`
  position: absolute;
  background-image: url(${Calendar});
  border-right: 1px;
  color: red;
  width: 30px;
  height: 20px;
  pointer-events: none;
  top: 30px;
  left: 10px;
  z-index: 50;
`
