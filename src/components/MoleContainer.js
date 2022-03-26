import { useState } from 'react'
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";


const MoleContainer = ({ score, setScore }) => {
    //console.log(props)
    const [displayMole, toggleMole] = useState(false)

    const handleClick = (e) => {
        setScore(score + 1)
        toggleMole(false)
    }
    return(
        <div className="mole-container" style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole ? <Mole handleClick={handleClick} toggle={toggleMole}/> : <EmptySlot toggle={toggleMole}/>}
        </div>
    )
}

export default MoleContainer