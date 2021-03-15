import React from 'react'
import styled from 'styled-components/macro'

export default function MealEntry({ mealList }) {
  return (
    <MealEntryWrapper>
      <MealOverview>
        <MealDescr>
          Frühstück:
          <Meal>{mealList.breakfast}</Meal>
        </MealDescr>
        <MealDescr>
          Mittagessen:
          <Meal>{mealList.lunch}</Meal>
        </MealDescr>
        <MealDescr>
          Abendessen:
          <Meal>{mealList.dinner}</Meal>
        </MealDescr>
        <MealDescr>
          Snack:
          <Meal>{mealList.snack}</Meal>
        </MealDescr>
      </MealOverview>
    </MealEntryWrapper>
  )
}

const MealEntryWrapper = styled.section`
  align-items: center;
  width: 100%;
`
const MealOverview = styled.ul`
  padding-left: 0;
  margin: 0 0 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  vertical-align: middle;
`

const Meal = styled.li`
  width: 100%;
  height: 150px;
  list-style-type: none;
  padding: 10px 20px;
  background-color: var(--color-transparent-white);
  border-radius: 20px;
  font-family: inherit;
  font-size: 0.8em;
  font-weight: 600;
  color: var(--color-darkgreen);
  text-align: center;
  vertical-align: middle;
  hyphens: auto;
`
const MealDescr = styled.span`
  font-weight: 400;
  text-align: center;
  color: white;
`
