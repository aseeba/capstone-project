import styled from 'styled-components/macro'

export default styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  background-color: var(--color-green);
  border: none;
  box-shadow: var(--box-shadow);
  color: white;
  font-weight: ${props => (props.isActive ? '600' : '400')};
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  font-size: ${props => (props.isActive ? '0.9em' : '0.8em')};
  font-family: inherit;
  font-weight: 600;
  margin-top: 20px;
  &:active {
    outline: none;
    border: 1px var(--color-darkgreen);
    box-shadow: var(--box-shadow);
  }
  &:disabled {
    background-color: var(--color-green);
    opacity: 0.7;
  }
`
