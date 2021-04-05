import styled from 'styled-components/macro'
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Input from '../Input/Input'
import Date from '../DatePicker/DatePicker'
import Button from '../Button/Button'

export default function MealForm({ onPlanMeal }) {
  const [inputValue, setInputValue] = useState({
    breakfast: '',
    lunch: '',
    dinner: '',
    snack: '',
  })
  const { push } = useHistory()

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
          value={inputValue.breakfast}
          labelText="Frühstück:"
          name="breakfast"
          placeholder="z. B. Himbeer-Kokos-Smoothie"
        />
        <Input
          onChange={handleValueChange}
          value={inputValue.lunch}
          labelText="Mittagessen:"
          name="lunch"
          placeholder="z. B.
          Chicken-Fajita-Pfanne"
        />
        <Input
          onChange={handleValueChange}
          value={inputValue.dinner}
          labelText="Abendessen:"
          name="dinner"
          placeholder="z. B. Hähnchenspieß auf buntem Gartensalat"
        />
        <Input
          onChange={handleValueChange}
          value={inputValue.snack}
          labelText="Zwischenmahlzeit:"
          name="snack"
          placeholder="z. B. Joghurt"
        />
        <Button
          title="submit-btn"
          disabled={
            inputValue.breakfast.length < 1 &&
            inputValue.lunch.length < 1 &&
            inputValue.dinner.length < 1 &&
            inputValue.snack.length < 1
          }
        >
          ✔︎ &nbsp; Speichern
        </Button>
      </MealFormWrapper>
    </CreateDaily>
  )

  function handleSubmit(event) {
    const form = event.target
    const { date } = form.elements
    event.preventDefault()

    onPlanMeal({ ...inputValue, date: date.value })
    push('/next-meals')
    form.reset()
    date.focus()
    return form
  }

  function handleValueChange(event) {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    })
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
