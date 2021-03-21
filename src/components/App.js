import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button/Button'
import MealForm from './MealForm/MealForm'
import MealEntry from './MealsEntry/MealsEntry'
import DateEntry from './DateEntry/DateEntry'

import loadFromLocal from '../lib/LoadFromLocal'
import saveToLocal from '../lib/saveToLocal'

export default function App() {
  const [mealList, setMealList] = useState(loadFromLocal('mealList') ?? [])
  const [currentPage, setCurrentPage] = useState('PlanMealsPage')

  useEffect(() => {
    saveToLocal('mealList', mealList)
  }, [mealList])

  return (
    <AppLayout>
      {currentPage === 'PlanMealsPage' && (
        <PlanMealsWrapper>
          <Heading>Was möchte ich essen?</Heading>
          <MealForm onPlanMeal={planMeal} onNavigate={setCurrentPage} />
        </PlanMealsWrapper>
      )}

      {currentPage === 'NextMealsPage' && (
        <NextMealsWrapper>
          <Heading>Mein Tagesplan</Heading>
          <DateEntry mealList={mealList} />
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
  font-size: 1.2em;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  color: white;
  margin: 0;
`
const NextMealsWrapper = styled.div`
  display: grid;
  gap: 10px;
`
const PlanMealsWrapper = styled.div`
  display: grid;
  gap: 10px;
`
