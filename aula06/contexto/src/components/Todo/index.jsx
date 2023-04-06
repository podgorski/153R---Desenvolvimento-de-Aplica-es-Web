import { useState } from 'react'
import './style.css'

export default function Todo({ produtos, quandoClicar }) {

    return (
        <div>
            <div className={'containerTodo'}>
                <div onClick={quandoClicar}>Todo</div>
                {produtos.map(produto => <p key={produto.id}>{produto.nome}</p>)}
            </div>

        </div>
    )
}