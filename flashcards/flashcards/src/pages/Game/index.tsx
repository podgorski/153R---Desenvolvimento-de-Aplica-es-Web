import './style.css'
import Card from '../../components/Card'
import Xp from '../../components/Xp'
import { useState } from 'react'

const Game = () => {

    const [cards, setCards] = useState([
        {
            front: "Gato",
            back: "Cat"
        },
        {
            front: "Vaca",
            back: "Cow"
        },
        {
            front: "Cachorro",
            back: "Dog"
        }
    ])

    return (
        <>
            <div id="container-topo">
                <div className='titulo'>FlashCard Challenge</div>
                <Xp total={10} />
            </div>
            <div id="container-cards">
                {cards.map((card => <Card content={card} />))}
            </div>
        </>
    )
}

export default Game