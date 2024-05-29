import React, { useState } from 'react'
import Counter from './components/Counter'
import GameOver from './components/GameOver'

const App = () => {
  const [isGameOver, setIsGameOver] = useState(false)

  const finishGame = () => {
    setIsGameOver(true)
  }

  return (
    <div style={styles.container}>
      {isGameOver ?
        <GameOver /> : <Counter finishGame={finishGame} />
      }
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    textAlign: 'center',
    marginTop: '30px',
    justifyContent: 'center',
  },
}

export default App