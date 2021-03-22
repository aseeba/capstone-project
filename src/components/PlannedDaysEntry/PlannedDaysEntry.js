import React from 'react'
import styled from 'styled-components/macro'
import Button from '../Button/Button'
import MealEntry from '../MealsEntry/MealsEntry'
import DateEntry from '../DateEntry/DateEntry'

export default function PlannedDaysEntry({
  mealList,
  showPlannedDays,
  backToPlanPage,
}) {
  return (
    <PlannedDayWrapper>
      {mealList.map(mealList => (
        <PlannedDay key={mealList.date}>
          <DateEntry mealList={mealList} />
          <MealEntry mealList={mealList} showPlannedDays={showPlannedDays} />
          <Button onClick={backToPlanPage}> ★ &nbsp; Neuer Tag</Button>
        </PlannedDay>
      ))}
    </PlannedDayWrapper>
  )
}

const PlannedDayWrapper = styled.section`
  display: grid;
  gap: 10px;
`
const PlannedDay = styled.div`
  display: flex;
  justify-content: space-between;
`
