import './App.css'
import Counter from './components/Counter'
import Todo from './components/Todo'
import { useState } from 'react'

function App() {


  return (
    <div>
      <h1>Contexto</h1>
      <Todo />
      <Counter />
    </div>
  )
}

export default App
