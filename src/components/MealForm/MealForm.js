import styled from 'styled-components/macro'
import React from 'react'
import { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default function MealForm({ onPlanMeal, onNavigate }) {
  const [mealListValue, setmealListValue] = useState('')
  const handleValueChange = event => {
    setmealListValue(event.target.value)
  }

  return (
    <MealFormWrapper onSubmit={handleSubmit} onChange={handleValueChange}>
      <Input
        labelText="Frühstück:"
        name="breakfast"
        placeholder="Was möchte ich zum Frühstück essen?"
        autoFocus={true}
      />
      <Input
        labelText="Mittagessen:"
        name="lunch"
        placeholder="Was möchte ich zum Mittag essen?"
      />
      <Input
        labelText="Abendessen:"
        name="dinner"
        placeholder="Was möchte ich zu Abend essen?"
      />
      <Input
        labelText="Zwischenmahlzeit:"
        name="snack"
        placeholder="Was möchte ich snacken?"
      />
      <Button disabled={!mealListValue}>&#10003; Speichern</Button>
    </MealFormWrapper>
  )

  function handleSubmit(event) {
    const form = event.target
    const { breakfast, lunch, dinner, snack } = form.elements
    event.preventDefault()

    onPlanMeal({
      breakfast: breakfast.value,
      lunch: lunch.value,
      dinner: dinner.value,
      snack: snack.value,
    })
    form.reset()
    breakfast.focus()
    onNavigate('NextMealsPage')

    return form
  }
}

const MealFormWrapper = styled.form`
  display: grid;
  gap: 10px;
`
