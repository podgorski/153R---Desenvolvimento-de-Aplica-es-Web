import { useContext } from 'react'
import './style.css'
import { TodoContext } from '../../context/Todo'

const Counter = () => {

    const { produtos } = useContext(TodoContext)

    return (
        <div className={"containerCounter"}>{produtos.length}</div>
    )
}

export default Counter