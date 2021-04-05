import styled from 'styled-components/macro'
import MealForm from '../MealForm/MealForm'

export default function PlanMealsPage({ onPlanMeal }) {
  return (
    <PlanMealsWrapper>
      <Heading>Was möchte ich essen?</Heading>
      <MealForm onPlanMeal={onPlanMeal} />
    </PlanMealsWrapper>
  )
}

const Heading = styled.h1`
  font-size: 1.2em;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  color: white;
  margin: 0;
  margin: 10px 0;
  border-bottom: 1px solid var(--color-green);
`
const PlanMealsWrapper = styled.div`
  display: grid;
  gap: 10px;
`
