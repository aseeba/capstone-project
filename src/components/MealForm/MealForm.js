import styled from 'styled-components/macro'
import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Input from '../Input/Input'
import Date from '../DatePicker/DatePicker'
import Button from '../Button/Button'

export default function MealForm({ onPlanMeal }) {
  const [mealListValue, setmealListValue] = useState('')

  const handleValueChange = event => {
    setmealListValue(event.target.value)
  }

  return (
    <CreateDaily>
      <MealFormWrapper onChange={handleValueChange} onSubmit={handleSubmit}>
        <Date
          labelText="Datum:"
          name="date"
          placeholder="Wähle einen Tag aus"
          autoFocus={true}
          required={true}
        />
        <Input
          labelText="Frühstück:"
          name="breakfast"
          placeholder="z. B. Himbeer-Kokos-Smoothie"
        />
        <Input
          labelText="Mittagessen:"
          name="lunch"
          placeholder="z. B.
          Chicken-Fajita-Pfanne"
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
        <Button as={NavLink} exakt to="/NextMeals" disabled={!mealListValue}>
          ✔︎ &nbsp; Speichern
        </Button>
      </MealFormWrapper>
    </CreateDaily>
  )

  function handleSubmit(event) {
    const form = event.target
    const { breakfast, lunch, dinner, snack, date } = form.elements
    event.preventDefault()

    onPlanMeal({
      date: date.value,
      breakfast: breakfast.value,
      lunch: lunch.value,
      dinner: dinner.value,
      snack: snack.value,
    })
    form.reset()
    date.focus()

    return form
  }
}

const CreateDaily = styled.section`
  display: grid;
`

const MealFormWrapper = styled.form`
  display: grid;
  gap: 10px;
  &:last-child {
    margin-bottom: 30px;
  }
`
