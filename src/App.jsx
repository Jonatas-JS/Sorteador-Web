import { useState } from 'react'
import './App.css'

import { SideBar } from './components/SideBar'
import { Sorteio } from './components/Sorteio'

function App() {

  return (
    <div className="App">
      <SideBar />
      <div className="sorteioNumero">
      <Sorteio />
      </div>

    </div>
  )
}

export default App
