import { useState } from 'react'
import styles from './ButtomCalcular.module.css'

export function ButtomCalcular({ name }) {
  const [nSorteado, setNsorteado] = useState(0)
  let acumulador = [10]

  function calcular() {
    setNsorteado(nSorteado + 1)

    // acumulador.push(1, 2, 3)
    // acumulador.push(4, 5, 6)

    // console.log(acumulador)
  }
  return (
    <div>
      <p>Resultado {nSorteado}</p>
      <button onClick={calcular}>{name}</button>
    </div>
  )
}