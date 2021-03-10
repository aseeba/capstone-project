import styled from 'styled-components/macro'
import Input from './Input'

export default function App() {
  return (
    <AppLayout>
      <Heading>Was esse ich morgen?</Heading>
      <Card>
        <form>
          <Input
            labelText="Frühstück:"
            name="mealDescription"
            placeholder="Was möchte ich zum Frühstück essen?"
          />
          <Input
            labelText="Mittagessen:"
            name="mealDescription"
            placeholder="Was möchte ich zum Mittag essen?"
          />
          <Input
            labelText="Abendessen:"
            name="mealDescription"
            placeholder="Was möchte ich zu Abend essen?"
          />
          <Input
            labelText="Snack:"
            name="mealDescription"
            placeholder="Was möchte ich snacken?"
          />
        </form>
      </Card>
    </AppLayout>
  )
}

const AppLayout = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  overflow: scroll;
`
const Card = styled.section`
  background-color: white;
`

const Heading = styled.h2`
  font-size: 1.6em;
  text-align: center;
  color: #6ddb03;
  margin-bottom: 0;
`
