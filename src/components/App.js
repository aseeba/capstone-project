import styled from 'styled-components/macro'
import MealForm from './MealForm/MealForm'

export default function App() {
  return (
    <AppLayout>
      <Heading>Was esse ich morgen?</Heading>
      <MealForm />
    </AppLayout>
  )
}

const AppLayout = styled.div`
  display: grid;
  padding: 20px;
  height: auto;
`
const Heading = styled.h2`
  font-size: 1.4em;
  text-align: center;
  color: var(--color-darkgreen);
`
