import './App.css'
import Counter from './components/Counter'
import Todo from './components/Todo'
import { useState } from 'react'

function App() {

  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Estudar Node', realizado: false },
    { id: 2, nome: 'Estudar React', realizado: false },
    { id: 3, nome: 'Estudar React', realizado: false },
  ])

  const handleClick = () => {
    setProdutos([...produtos, { id: 4, nome: 'fazer cafe', realizado: false }])
  }

  return (
    <div>
      <h1>Contexto</h1>
      <Todo produtos={produtos} quandoClicar={handleClick} />
      <Counter total={produtos.length} />
    </div>
  )
}

export default App
