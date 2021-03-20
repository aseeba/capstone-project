import styled from 'styled-components/macro'

export default styled.button`
  margin-top: 20px;
  padding: 15px 45px;
  border-radius: 8px;
  background-color: var(--color-green);
  border: none;
  box-shadow: 0 0 10px 1px var(--color-dark-green);
  color: white;
  font-weight: ${props => (props.isActive ? '600' : '400')};
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-size: ${props => (props.isActive ? '0.9em' : '0.8em')};
  font-family: inherit;
  font-weight: 600;

  &.active {
    outline: none;
    border: 1px var(--color-darkgreen);
    box-shadow: 0 0 5px 1px var(--color-dark-green);

    &.disabled {
    }
  }
`
