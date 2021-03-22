import React from 'react'
import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function DateEntry({ mealList, dailyPlan, showPlannedDays }) {
  return (
    <DateEntryWrapper>
      <Button onClick={showPlannedDays}>◀︎</Button>
      <Day>{mealList.date}</Day>
      <Button onClick={showPlannedDays}>▶︎</Button>
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
