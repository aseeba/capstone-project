import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function DateEntry({
  date,
  onPreviousDay,
  onNextDay,
  mealList,
  daily,
}) {
  const getToday = new Date()
  const today = getToday.toISOString().split('T')[0]

  const getTomorrow = new Date()
  getTomorrow.setDate(getToday.getDate() + 1)
  const tomorrow = getTomorrow.toISOString().split('T')[0]

  const getYesterday = new Date()
  getYesterday.setDate(getToday.getDate() - 1)
  const yesterday = getYesterday.toISOString().split('T')[0]

  return (
    <DateEntryWrapper>
      <Button title="back-btn" disabled={daily === 0} onClick={onPreviousDay}>
        ◀︎
      </Button>
      <Day>
        {date === today
          ? 'HEUTE'
          : date === tomorrow
          ? 'MORGEN'
          : date === yesterday
          ? 'GESTERN'
          : date}
      </Day>
      <Button
        title="forward-btn"
        disabled={daily === mealList.length - 1}
        onClick={onNextDay}
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
