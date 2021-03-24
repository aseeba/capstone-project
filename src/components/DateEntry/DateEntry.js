import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function DateEntry({
  mealList,
  setPlannedDayNumber,
  plannedDayNumber,
}) {
  // const [dateStatus, setDateStatus] = useState(date)

  // const getDateStatus(dateStatus) =
  //   setDateStatus()
  //   console.log(DateIsToday)

  return (
    <DateEntryWrapper>
      <Button onClick={plannedDayNumber > 0 ? back : undefined}>◀︎</Button>
      <Day>{mealList[plannedDayNumber].date}</Day>
      <Button
        onClick={mealList.length > plannedDayNumber + 1 ? next : undefined}
      >
        ▶︎
      </Button>
    </DateEntryWrapper>
  )

  // function compareDates () {
  //   const date = mealList.date
  //   const inputDate = new Date(date)
  //   const currDate = new Date()

  // function DateIsToday() {
  //   inputDate.toDateString() === currDate.toDateString()
  //   return <Day>HEUTE</Day>
  // }

  // function DateIsTomorrow() {
  //   inputDate.toDateString() === currDate.toDateString() + 1
  //   return <Day>MORGEN</Day>
  // }

  // function DateIsYesterday() {
  //   inputDate.toDateString() === currDate.toDateString() - 1
  //   return <Day>GESTERN</Day>
  // }}

  function next() {
    setPlannedDayNumber(prevState => prevState + 1)
  }

  function back() {
    setPlannedDayNumber(prevState => prevState - 1)
  }
}

const DateEntryWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

const Day = styled.h2`
  color: var(--color-green);
  font-weight: 300;
  text-transform: uppercase;
  font-size: 1em;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  margin: 20px 0 0 0;
`
