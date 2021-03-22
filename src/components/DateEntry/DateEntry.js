import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function DateEntry({
  mealList,
  dailyPlan,
  showPlannedDays,
  setPlannedDayNumber,
  plannedDayNumber,
}) {
  function forth() {
    setPlannedDayNumber(prevState => prevState + 1)
  }
  function back() {
    setPlannedDayNumber(prevState => prevState - 1)
  }
  return (
    <DateEntryWrapper>
      <Button onClick={plannedDayNumber > 0 ? back : undefined}>◀︎</Button>
      {/*  weil *mealList* nun kein einfacher Array mehr ist,
      sondern ein Array bestehend aus Objekten,
      müssen wir uns hier zunächst für ein Objekt entscheiden,
      das wir uns vornehmen und DAraus dann date entnehmen.
      Das mache ich per *BracketNotation* und nehme einfach mal das älteste,
      darum setze ich als Initial State 0. */}
      <Day>{mealList[plannedDayNumber].date}</Day>
      <Button
        onClick={mealList.length > plannedDayNumber + 1 ? forth : undefined}
      >
        ▶︎
      </Button>
    </DateEntryWrapper>
  )
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
