import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import LandingPage from './LandingPage/LandingPage'
import PlanMealsPage from './PlanMealsPage/PlanMealsPage'
import NextMealsPage from './NextMealsPage/NextMealsPage'
import loadFromLocal from '../lib/LoadFromLocal'
import saveToLocal from '../lib/saveToLocal'

export default function App() {
  const [mealList, setMealList] = useState(loadFromLocal('mealList'), [])
  const [loadingLandingPage, setIsLoadingLandingPage] = useState(false)
  window.setTimeout(() => {
    setIsLoadingLandingPage(true)
  }, 2000)

  mealList.sort((a, b) => b.date < a.date)

  useEffect(() => {
    saveToLocal('mealList', mealList)
  }, [mealList])

  return (
    <AppLayout>
      <LandingPage loadingPage={loadingLandingPage} />
      <Switch>
        <Route exact path="/">
          <PlanMealsPage onPlanMeal={planMeal}></PlanMealsPage>
        </Route>
        <Route path="/next-meals">
          <NextMealsPage mealList={mealList}></NextMealsPage>
        </Route>
      </Switch>
    </AppLayout>
  )

  function planMeal(newMeal) {
    const existEntry = mealList?.find(meal => meal.date === newMeal.date)
    if (existEntry) {
      const index = mealList.indexOf(existEntry)
      setMealList([
        ...mealList.slice(0, index),
        { ...newMeal },
        ...mealList.slice(index + 1),
      ])
    } else {
      setMealList(mealList ? [newMeal, ...mealList] : [newMeal])
    }
  }
}

const AppLayout = styled.div`
  display: grid;
  padding: 20px;
  height: auto;
  position: relative;
`
