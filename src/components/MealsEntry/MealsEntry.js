import React from 'react'
import styled from 'styled-components/macro'

export default function MealEntry({ meals }) {
  return (
    <MealEntryWrapper>
      <MealOverview>
        <Description>
          Frühstück:
          <Meal>Frühstück mit ganz viel leckerem Firlefanz</Meal>
        </Description>
        <Description>
          Mittagessen:
          <Meal>Mittagessen mit Nachtisch</Meal>
        </Description>
        <Description>
          Abendessen:<Meal>Von allem ein bisschen was</Meal>
        </Description>
        <Description>
          Snack:<Meal>Kleinigkeit</Meal>
        </Description>
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
  gap: 10px;
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
const Description = styled.span`
  font-weight: 400;
  text-align: center;
  color: white;
`
