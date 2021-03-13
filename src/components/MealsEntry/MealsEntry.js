import React from 'react'
import styled from 'styled-components/macro'

export default function MealEntry({ nameOfMeal }) {
  return (
    <MealEntryWrapper>
      <MealDescription>{nameOfMeal}</MealDescription>
    </MealEntryWrapper>
  )
}

const MealEntryWrapper = styled.ul`
  display: grid;
  gap: 10px;
`

const MealDescription = styled.li`
  list-style-type: none;
  padding: 5px;
  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: 2fr;
  background-color: var(--color-transparent-white);
  border-radius: 10px;
  font-family: inherit;
  font-size: inherit;
  font-weight: 600;
`
