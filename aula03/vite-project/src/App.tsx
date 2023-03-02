
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [x] = useState(['1', '2', '2', '1', '2', '2'])
  return (
    <div id="container">
      {x.map(i => <Card />)}

    </div>
  )
}

export default App
