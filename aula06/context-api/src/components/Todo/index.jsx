
import { useContext } from 'react'
import './style.css'
import { TodoContext } from '../../context/Todo'

export default function Todo() {

    const { produtos, handleClick } = useContext(TodoContext)

    return (
        <div>
            <div className={'containerTodo'}>
                <div onClick={() => { handleClick('teste novo') }}>Todo</div>
                {produtos.map((produto) => <p key={produto.id}>{produto.nome}</p>)}

            </div>

        </div>
    )
}