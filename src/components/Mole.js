import  { useEffect } from 'react'
import MoleImg from '../images/mole.png'


const Mole = ({ handleClick, toggleMole }) => {

    useEffect(() => {
        let seconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            //toggleMole(false)
        }, seconds)
        return () => clearTimeout(timer)
    })

    return(
        <div className="mole">
            <img src={MoleImg} alt="mole-pic" onClick={handleClick}/>
        </div>
    )
}

export default Mole