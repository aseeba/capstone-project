import { useState } from 'react'
import styled from 'styled-components/macro'
import MealForm from './MealForm/MealForm'

export default function App() {
  const [nameOfMeal, setNameOfMeal] = useState([])

  return (
    <AppLayout>
      <Heading>Was esse ich morgen?</Heading>
      <MealForm onCreateMeal={createMeal} />
    </AppLayout>
  )

  function createMeal({ breakfast, lunch, dinner, snack }) {
    setNameOfMeal(nameOfMeal)
  }
}

const AppLayout = styled.div`
  display: grid;
  padding: 20px;
  height: auto;
`
const Heading = styled.h1`
  font-size: 1.4em;
  text-align: center;
  color: var(--color-darkgreen);
  margin-bottom: 30px;
`
