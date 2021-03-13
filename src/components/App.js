import { useState } from 'react'
import styled from 'styled-components/macro'
import MealForm from './MealForm/MealForm'
import Button from './Button/Button'

export default function App() {
  const [nameOfMeal, setNameOfMeal] = useState([])
  const [currentPage, setCurrentPage] = useState('PlanPage')

  return (
    <AppLayout>
      {currentPage === 'PlanMealsPage' && (
        <div>
          <Heading>Was esse ich morgen?</Heading>
          <MealForm onPlanMeal={planMeal} />
        </div>
      )}

      {currentPage === 'TomorrowMealsPage' && (
        <div>
          <Heading>Morgen esse ich:</Heading>
          <Button onClick={backToPlanPage}>Neuer Tag</Button>
        </div>
      )}
    </AppLayout>
  )

  function planMeal({ breakfast, lunch, dinner, snack }) {
    setNameOfMeal(nameOfMeal)
  }
  function backToPlanPage() {
    setCurrentPage('PlanPage')
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
