import styled from 'styled-components/macro'

export default styled.button`
  margin-top: 20px;
  padding: 15px 45px;
  border-radius: 35px;
  box-shadow: 0 0 10px var(--color-limegreen);
  background: #dbf25d;
  color: var(--color-darkgreen);
  font-weight: ${props => (props.isActive ? '600' : '400')};
  border: none;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 600;

  &.active {
    background-color: rgb(0, 39, 39);
    color: darkturquoise;
    font-weight: 600;
  }
`
