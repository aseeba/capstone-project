import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import DateEntry from '../DateEntry/DateEntry'
import MealEntry from '../MealEntry/MealEntry'
import Button from '../Button/Button'

export default function NextMealsPage({ mealList }) {
  return (
    <NextMealsWrapper>
      <Heading>Mein Tagesplan</Heading>
      {mealList.map(meal => (
        <EntryWrapper key={meal.date}>
          <DateEntry date={meal.date} />
          <MealEntry
            breakfast={meal.breakfast}
            lunch={meal.lunch}
            dinner={meal.dinner}
            snack={meal.snack}
          />
        </EntryWrapper>
      ))}
      <Button as={NavLink} exakt to="/" title="new-btn">
        ★&nbsp; Neuer Tag &nbsp;★
      </Button>
    </NextMealsWrapper>
  )
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
  margin: 0;
`
