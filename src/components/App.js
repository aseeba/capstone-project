import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import PlanMealsPage from './PlanMealsPage/PlanMealsPage'
import NextMealsPage from './NextMealsPage/NextMealsPage'
import loadFromLocal from '../lib/loadFromLocal'
import saveToLocal from '../lib/saveToLocal'

export default function App() {
  const [mealList, setMealList] = useState(loadFromLocal('mealList'), [])

  useEffect(() => {
    saveToLocal('mealList', mealList)
  }, [mealList])

  return (
    <AppLayout>
      <Switch>
        <Route exact path="/">
          <PlanMealsPage onPlanMeal={planMeal}></PlanMealsPage>
        </Route>
        <Route path="/nextmeals">
          <NextMealsPage mealList={mealList}></NextMealsPage>
        </Route>
      </Switch>
    </AppLayout>
  )

  function planMeal(newMeal) {
    const existEntry = mealList?.find(meal => meal.date === newMeal.date)
    if (existEntry) {
      const index = mealList.indexOf(existEntry)
      setMealList(
        [
          ...mealList.slice(0, index),
          { ...newMeal },
          ...mealList.slice(index + 1),
        ].sort((a, b) => a.date > b.date)
      )
    } else {
      setMealList(mealList ? [newMeal, ...mealList] : [newMeal]).sort(
        (a, b) => a.date > b.date
      )
    }
  }
}

const AppLayout = styled.div`
  display: grid;
  padding: 20px;
  height: auto;
`
