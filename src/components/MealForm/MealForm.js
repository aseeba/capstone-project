import styled from 'styled-components/macro'
import Input from '../Input/Input'

export default function MealForm() {
  return (
    <MealFormWrapper>
      <Input
        labelText="Frühstück:"
        name="Breakfast"
        placeholder="Was möchte ich zum Frühstück essen?"
      />
      <Input
        labelText="Mittagessen:"
        name="Lunch"
        placeholder="Was möchte ich zum Mittag essen?"
      />
      <Input
        labelText="Abendessen:"
        name="Dinner"
        placeholder="Was möchte ich zu Abend essen?"
      />
      <Input
        labelText="Zwischenmahlzeit:"
        name="Snack"
        placeholder="Was möchte ich snacken?"
      />
    </MealFormWrapper>
  )
}

const MealFormWrapper = styled.form`
  display: grid;
  gap: 10px;
`
