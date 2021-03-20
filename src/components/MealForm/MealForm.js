import styled from 'styled-components/macro'
import React from 'react'
import { useState } from 'react'
import Input from '../Input/Input'
import Date from '../DatePicker/DatePicker'
import Button from '../Button/Button'

export default function MealForm({ onPlanMeal, onNavigate }) {
  const [mealListValue, setmealListValue] = useState('')
  const handleValueChange = event => {
    setmealListValue(event.target.value)
  }

  return (
    <CreateDaily>
      <Date labelText="Datum:" autoFocus={true}></Date>
      <MealFormWrapper onSubmit={handleSubmit} onChange={handleValueChange}>
        <Input
          labelText="Frühstück:"
          name="breakfast"
          placeholder="z. B. Himbeer-Kokos-Smoothie"
        />
        <PeekyPlaceholder>Bspw. Kokos-Himbeer-Smoothie</PeekyPlaceholder>
        <Input
          labelText="Mittagessen:"
          name="lunch"
          placeholder="z. B. Chicken-Fajita-Pfanne"
        />
        <Input
          labelText="Abendessen:"
          name="dinner"
          placeholder="z. B. Hähnchenspieß auf buntem Gartensalat"
        />
        <Input
          labelText="Zwischenmahlzeit:"
          name="snack"
          placeholder="z. B. Joghurt"
        />
        <Button disabled={!mealListValue}>&#10003; Speichern</Button>
      </MealFormWrapper>
    </CreateDaily>
  )

  function handleSubmit(event, date) {
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
const PeekyPlaceholder = styled.span`
  color: #35dc9b;
  font: 13px Helvetica, Arial, sans-serif;
  position: absolute;
  top: 0px;
  left: 20px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
`
const CreateDaily = styled.div`
  display: grid;
`
