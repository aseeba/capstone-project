import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import MealForm from './MealForm/MealForm'
import DateEntry from './DateEntry/DateEntry'
import MealEntry from './MealEntry/MealEntry'
import Button from './Button/Button'
import loadFromLocal from '../lib/LoadFromLocal'
import saveToLocal from '../lib/saveToLocal'

export default function App() {
  const [mealList, setMealList] = useState(loadFromLocal('mealList'), [])
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
          {mealList.map(meal => (
            <EntryWrapper key={meal.date}>
              <DateEntry date={meal.date} />
              <MealEntry
                breakfast={meal.breakfast}
                lunch={meal.lunch}
                dinner={meal.dinner}
                snack={meal.snack}
              />
            </EntryWrapper>
          ))}
          <Button onClick={backToPlanPage}>★&nbsp; Neuer Tag &nbsp;★</Button>
        </NextMealsWrapper>
      )}
    </AppLayout>
  )

  function planMeal(newMeal) {
    const existEntry = mealList?.find(meal => meal.date === newMeal.date)
    if (existEntry) {
      const index = mealList.indexOf(existEntry)
      setMealList([
        ...mealList.slice(0, index),
        { newMeal },
        ...mealList.slice(index + 1),
      ])
    } else {
      setMealList(mealList ? [...mealList, newMeal] : [newMeal])
    }
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
const EntryWrapper = styled.div`
  display: grid;
  gap: 10px;
`
