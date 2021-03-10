import React from 'react'
import styled from 'styled-components/macro'

export default function Input({ labelText, placeholder, name }) {
  return (
    <Label className="Input">
      {labelText}
      <InputStyled name={name} placeholder={placeholder} type="text" />
    </Label>
  )
}

const Label = styled.label`
  display: grid;
  gap: 4px;
  color: #606c77;
  text-align: center;
`
const InputStyled = styled.input`
  border: none;
  border-radius: 8px;
  padding: 15px;
  background-color: #e2e4e7;
  color: #606c77;
  text-align: center;
  font-size: 0.8em;
  margin-bottom: 20px;
`
