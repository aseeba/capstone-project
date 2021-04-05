import styled, { keyframes } from 'styled-components/macro'
import { useState } from 'react'
import Gusto from '../../assets/gusto.svg'

export default function Landingpage({ loadingPage }) {
  const [hideLandingPage, setHideLandingPage] = useState(false)

  setTimeout(() => {
    setHideLandingPage(true)
  }, 3500)

  return (
    <Page
      hidePage={hideLandingPage}
      finishedLoading={loadingPage}
      className={loadingPage && 'fadeOut'}
    >
      <CircleSmall />
      <GustoLogo />
      <CircleBig />
      <Spinner />
    </Page>
  )
}

const Page = styled.main`
  display: ${props => (props.hidePage ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: 0;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  z-index: 100;
  background: var(--color-green);
  &.fadeOut {
    opacity: 0;
    transition: all 4s;
  }
`

const GustoLogo = styled.span`
  background-image: url(${Gusto});
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 140px;
  z-index: 300;
  width: 110px;
  height: 100%;
  pointer-events: none;
  background-repeat: no-repeat;
  opacity: 1;
`
const CircleSmall = styled.span`
  position: absolute;
  top: 120px;
  color: var(--color-green);
  align-items: center;
  font-size: 1.5rem;
  padding: 20px 20px;
  border-radius: 200px;
  background-color: white;
  width: 95px;
  height: 95px;
  z-index: 100;
`
const CircleBig = styled.span`
  position: absolute;
  top: 100px;
  color: var(--color-green);
  align-items: center;
  font-size: 1.5rem;
  padding: 20px 20px;
  border-radius: 200px;
  background-color: white;
  width: 130px;
  height: 130px;
  opacity: 0.7;
  z-index: 75;
`

const loadingSpinner = keyframes`
0%, 100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
`

const Spinner = styled.div`
  color: #ffffff;
  font-size: 10px;
  margin: 0 auto;
  width: 1.5em;
  height: 1.5em;
  border-radius: 70%;
  position: absolute;
  bottom: 150px;
  text-indent: -9999em;
  z-index: 200;
  -webkit-animation: ${loadingSpinner} 1.3s infinite linear;
  animation: ${loadingSpinner} 1.3s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
`
