import { useState } from 'react'
import styled from 'styled-components/macro'
import MealForm from './MealForm/MealForm'
import Button from './Button/Button'

export default function App() {
  const [meals, setMeals] = useState([])
  const [currentPage, setCurrentPage] = useState('PlanMealsPage')

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

  function planMeal(newMeal) {
    setMeals([...meals, newMeal])
    // setPlayers(playerNames.map(name => ({ name, score: 0 })))
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
