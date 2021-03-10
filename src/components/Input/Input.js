import React from 'react'
import styled from 'styled-components/macro'

export default function Input({ labelText, placeholder, name }) {
  return (
    <Label className="Input">
      {labelText}
      <Textarea
        name={name}
        placeholder={placeholder}
        type="text"
        maxLength="75"
      />
    </Label>
  )
}

const Label = styled.label`
  display: grid;
  gap: 4px;
  color: white;
  text-align: center;
`
const Textarea = styled.textarea`
  border: solid 1px;
  border-radius: 8px;
  padding: 15px;
  background-color: var(--color-gradient-green);
  color: white;
  ::placeholder {
    color: var(--color-darkgreen);
  }
  text-align: center;
  font-size: 0.8em;
  margin-bottom: 25px;
  opacity: 0.7;
`
