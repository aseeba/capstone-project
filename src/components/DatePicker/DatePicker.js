import styled from 'styled-components/macro'
import Calendar from '../../assets/calendar.svg'

export default function Date({ labelText, autoFocus }) {
  return (
    <DateWrapper>
      <Label>
        {labelText}
        <CalendarIcon />
        <ReqMark>!</ReqMark>
        <DateInput
          type="date"
          placeholder="Wähle ein Datum"
          autoFocus={autoFocus}
          required
        ></DateInput>
      </Label>
    </DateWrapper>
  )
}

const DateWrapper = styled.div`
  display: grid;
`
const Label = styled.label`
  position: relative;
  display: grid;
  color: white;
  text-align: center;
  font-size: 0.8em;
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
    font-size: 0.8em;
    opacity: 0.6;
  }
  &:focus {
    outline: none;
    border-bottom: 5px solid var(--color-green);
  }
  text-align: center;
  font-size: 1em;
  z-index: 100;
`

const ReqMark = styled.span`
  position: absolute;
  pointer-events: none;
  top: 0;
  right: 20px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 22px;
  color: darkred;
  z-index: 200;
`

const CalendarIcon = styled.span`
  position: absolute;
  background-image: url(${Calendar});
  border-right: 1px;
  color: red;
  width: 30px;
  height: 20px;
  pointer-events: none;
  top: 35px;
  left: 10px;
  z-index: 200;
`
