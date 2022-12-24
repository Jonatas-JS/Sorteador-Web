import { useState } from 'react'
import styles from './ButtomCalcular.module.css'

export function ButtomCalcular({ name }) {
  const [nSorteado, setNsorteado] = useState(0)
  const [acc, setAcc] = useState([10, 20, 30])
  let acumulador = [10, 20, 30]

  function calcular() {
    setAcc([...acc, ...[1, 2, 3]])
  }
  return (
    <div>
      {acc.map(item => <p key={Math.random()}>Resultado {item}</p>)}
      
      <button onClick={calcular}>{name}</button>
    </div>
  )
}
