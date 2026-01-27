import { useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import reactLogo from '../shared/assets/react.svg'
import viteLogo from '/vite.svg'



function App() {
  const [count, setCount] = useState(0)

  return (
    <AppContainer>
      <LogoContainer>
        <a href="https://vite.dev" target="_blank">
          <LogoImg src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <LogoImg src={reactLogo} className="react" alt="React logo" />
        </a>
      </LogoContainer>
      <h1>Vite + React</h1>
      <Card>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <ReadTheDocs>
        Click on the Vite and React logos to learn more
      </ReadTheDocs>
    </AppContainer>
  )
}

export default App


const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const LogoImg = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @media (prefers-reduced-motion: no-preference) {
    &.react {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

const Card = styled.div`
  padding: 2em;
`;

const ReadTheDocs = styled.p`
  color: #888;
`;