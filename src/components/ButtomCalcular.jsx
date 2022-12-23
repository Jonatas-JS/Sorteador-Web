import { useState } from 'react'
import styles from './ButtomCalcular.module.css'

export function ButtomCalcular({ name }) {
  const [nSorteado, setNsorteado] = useState(1)
  let numerosSorteados = []

  function calcular() {
    setNsorteado(nSorteado + 1)
    console.log(nSorteado)
    numerosSorteados.push(nSorteado)
    console.log(numerosSorteados)
  }
  return (
    <div>
      <button onClick={calcular}>{name}</button>
    </div>
  )
}