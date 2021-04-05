import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import DateEntry from '../DateEntry/DateEntry'
import MealEntry from '../MealEntry/MealEntry'
import Button from '../Button/Button'

export default function NextMealsPage({ mealList }) {
  const [daily, setDaily] = useState(0)

  return (
    <NextMealsWrapper>
      <Heading>Mein Tagesplan</Heading>
      {
        <EntryWrapper key={mealList[daily].date}>
          <DateEntry
            daily={daily}
            mealList={mealList}
            date={mealList[daily].date}
            onNextDay={handleNext}
            onPreviousDay={handlePrevious}
          />
          <MealEntry
            breakfast={mealList[daily].breakfast}
            lunch={mealList[daily].lunch}
            dinner={mealList[daily].dinner}
            snack={mealList[daily].snack}
          />
        </EntryWrapper>
      }
      <Button as={NavLink} exact to="/" title="new-btn">
        ★&nbsp; Neuer Tag &nbsp;★
      </Button>
    </NextMealsWrapper>
  )

  function handleNext() {
    setDaily(daily + 1)
  }

  function handlePrevious() {
    setDaily(daily - 1)
  }
}

const NextMealsWrapper = styled.div`
  display: grid;
  gap: 10px;
`
const EntryWrapper = styled.div`
  display: grid;
  gap: 10px;
`
const Heading = styled.h1`
  font-size: 1.2em;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  color: white;
  border-bottom: 1px solid var(--color-green);
`
