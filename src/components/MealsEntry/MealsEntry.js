import React from 'react'
import styled from 'styled-components/macro'

export default function MealEntry({ mealList, plannedDayNumber }) {
  return (
    <MealEntryWrapper>
      <MealGroup>
        <MealDescr>
          Frühstück:
          <Meal>{mealList[plannedDayNumber].breakfast}</Meal>
        </MealDescr>
        <MealDescr>
          Mittagessen:
          <Meal>{mealList[plannedDayNumber].lunch}</Meal>
        </MealDescr>
        <MealDescr>
          Abendessen:
          <Meal>{mealList[plannedDayNumber].dinner}</Meal>
        </MealDescr>
        <MealDescr>
          Snack:
          <Meal>{mealList[plannedDayNumber].snack}</Meal>
        </MealDescr>
      </MealGroup>
    </MealEntryWrapper>
  )
}

const MealEntryWrapper = styled.section`
  display: grid;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`
const MealGroup = styled.ul`
  padding-left: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  vertical-align: middle;
  font-size: 0.8em;
`

const Meal = styled.li`
  width: 100%;
  height: 150px;
  list-style-type: none;
  padding: 10px 20px;
  background-color: var(--color-transparent-white);
  border-radius: 20px;
  border-bottom: var(--border-bottom);
  font-family: inherit;
  font-size: 1em;
  font-weight: 600;
  color: var(--color-dark-bluegrey);
  text-align: center;
  vertical-align: middle;
  hyphens: auto;
`
const MealDescr = styled.span`
  font-weight: 300;
  text-align: center;
  color: white;
  font-size: 0.9em;
`
