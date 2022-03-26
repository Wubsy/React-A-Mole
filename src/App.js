import { useState } from 'react'
import './App.css'
import MoleContainer from "./components/MoleContainer"



const createHill = ({setScore, score}) => {
    const hills = []

    for (let i = 0; i < 9; i++) {
        hills.push(
            <MoleContainer key={i} setScore={setScore} score={score} />
        )
    }
    return(
        <div className="app">{hills}</div>
    )
}

const App = () => {
    const [score, setScore] = useState(0)
    return (
        <div className="App">
          <h1>React-A-Mole</h1>
          <h1>Score: {score}</h1>
            {createHill({setScore, score})}
        </div>
    )
}

export default App;
