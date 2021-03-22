import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import MealForm from './MealForm/MealForm'
import DateEntry from './DateEntry/DateEntry'
import MealEntry from './MealsEntry/MealsEntry'
import PlannedDaysEntry from './PlannedDaysEntry/PlannedDaysEntry'
import Button from './Button/Button'
import loadFromLocal from '../lib/LoadFromLocal'
import saveToLocal from '../lib/saveToLocal'

export default function App() {
  const [mealList, setMealList] = useState(loadFromLocal('mealList'), [])
  const [dailyPlan, setDailyPlan] = useState(loadFromLocal('dailyPlan'), [])
  const [currentPage, setCurrentPage] = useState('PlanMealsPage')
  const [plannedDayNumber, setPlannedDayNumber] = useState(0)

  useEffect(() => {
    saveToLocal('mealList', mealList)
  }, [mealList])

  useEffect(() => {
    saveToLocal('dailyPlan', dailyPlan)
  }, [dailyPlan])

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
          <DateEntry
            mealList={mealList}
            plannedDayNumber={plannedDayNumber}
            setPlannedDayNumber={setPlannedDayNumber}
          />
          {/* Deine Compoent-Dateien heißen Meal*s*Entry, vielleicht magst du das noch anpassen? :) */}
          <MealEntry
            mealList={mealList}
            plannedDayNumber={plannedDayNumber}
            setPlannedDayNumber={setPlannedDayNumber}
          />
          <Button onClick={backToPlanPage}> ★ &nbsp; Neuer Tag</Button>
        </NextMealsWrapper>
      )}
      {currentPage === 'PlannedDaysPage' && (
        <PlannedDaysWrapper>
          {dailyPlan.map(({ mealList }) => (
            <PlannedDaysEntry
              mealList={mealList}
              showPlannedDays={showPlannedDays}
              backToPlanPage={backToPlanPage}
            />
          ))}
        </PlannedDaysWrapper>
      )}
    </AppLayout>
  )

  function planMeal(newMeal) {
    /* Ich frage ob *mealList* noch der leere Array vom Anfang (useState ganz oben) ist.
    Wenn ja, soll nur ein neuer Array erstellt werden,
    der als erstes und einziges Objekt *newMeal* hat.
    Wenn schon Elemente in *mealList* vorhanden sind,
    soll er die zuerst in das neue Array spreaden
    und dann am Ende das Objekt aus *newMeal* einfügen */
    setMealList(mealList ? [...mealList, newMeal] : [newMeal])
  }

  function backToPlanPage() {
    setCurrentPage('PlanMealsPage')
  }

  function showPlannedDays() {
    setDailyPlan([mealList, ...dailyPlan])
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
const PlannedDaysWrapper = styled.div`
  display: grid;
  gap: 10px;
`
