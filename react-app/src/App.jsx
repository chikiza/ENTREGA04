import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Articulo from './components/Articulo'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
<Header/>
<Card/>
<Articulo/>
<Footer/>
</div>
  )
}

export default App
