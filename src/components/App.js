import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import MealForm from './MealForm/MealForm'
import Button from './Button/Button'
import MealEntry from './MealsEntry/MealsEntry'

import loadFromLocal from '../lib/LoadFromLocal'
import saveToLocal from '../lib/saveToLocal'

export default function App() {
  const [mealList, setMealList] = useState(loadFromLocal('mealList') ?? {})
  const [currentPage, setCurrentPage] = useState('PlanMealsPage')

  useEffect(() => {
    saveToLocal('mealList', mealList)
  }, [mealList])

  return (
    <AppLayout>
      {currentPage === 'PlanMealsPage' && (
        <div>
          <Heading>Was esse ich morgen?</Heading>
          <MealForm onPlanMeal={planMeal} onNavigate={setCurrentPage} />
        </div>
      )}

      {currentPage === 'NextMealsPage' && (
        <NextMealsWrapper>
          <Heading>Morgen esse ich:</Heading>
          <MealEntry mealList={mealList} />
          <Button onClick={backToPlanPage}>Neuer Tag</Button>
        </NextMealsWrapper>
      )}
    </AppLayout>
  )

  function planMeal(newMeals) {
    setMealList(newMeals)
  }

  function backToPlanPage() {
    setCurrentPage('PlanMealsPage')
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
const NextMealsWrapper = styled.div`
  display: grid;
  gap: 10px;
`
