import { useEffect } from 'react'
import MoleHill from '../images/molehill.png'

const EmptySlot = (toggleMole) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            toggleMole.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <div className="empty-slot">
            <img src={MoleHill} alt="molehill"/>
        </div>
    )
}

export default EmptySlot