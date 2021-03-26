import styled from 'styled-components/macro'
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Input from '../Input/Input'
import Date from '../DatePicker/DatePicker'
import Button from '../Button/Button'

export default function MealForm({ onPlanMeal }) {
  const [mealListValue, setMealListValue] = useState({
    breakfast: '',
    lunch: '',
    dinner: '',
    snakc: '',
  })
  const { push } = useHistory()
  const handleValueChange = event => {
    setMealListValue({
      ...mealListValue,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <CreateDaily>
      <MealFormWrapper onSubmit={handleSubmit}>
        <Date
          labelText="Datum:"
          name="date"
          placeholder="Wähle einen Tag aus"
          autoFocus={true}
          required={true}
        />
        <Input
          onChange={handleValueChange}
          mealListValue={mealListValue.breakfast}
          labelText="Frühstück:"
          name="breakfast"
          placeholder="z. B. Himbeer-Kokos-Smoothie"
        />
        <Input
          onChange={handleValueChange}
          mealListValue={mealListValue.lunch}
          labelText="Mittagessen:"
          name="lunch"
          placeholder="z. B.
          Chicken-Fajita-Pfanne"
        />
        <Input
          onChange={handleValueChange}
          mealListValue={mealListValue.dinner}
          labelText="Abendessen:"
          name="dinner"
          placeholder="z. B. Hähnchenspieß auf buntem Gartensalat"
        />
        <Input
          onChange={handleValueChange}
          mealListValue={mealListValue.snack}
          labelText="Zwischenmahlzeit:"
          name="snack"
          placeholder="z. B. Joghurt"
        />
        <Button title="submit-btn" disabled={mealListValue === ''}>
          ✔︎ &nbsp; Speichern
        </Button>
      </MealFormWrapper>
    </CreateDaily>
  )

  function handleSubmit(event) {
    const form = event.target
    const { date } = form.elements
    event.preventDefault()

    onPlanMeal({ ...mealListValue, date: date.value })
    push('/nextmeals')
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
