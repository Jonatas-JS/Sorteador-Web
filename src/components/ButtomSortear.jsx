import { useState } from 'react'
import styles from './ButtomSortear.module.css'

export function ButtomSortear({ name }) {
  const [nSorteados, setNsorteados] = useState([])

  function Sortear() {
    const nQuantidade = Number(document.querySelector('#nQuantidade').value)
    const nInicial = Number(document.querySelector('#nInicial').value)
    const nFinal = Number(document.querySelector('#nFinal').value)

    const acumulado = []
    
    for(let i = 0; i < nQuantidade; i++) {
      let gerarMathRandom = (min, max) => 
      Math.floor(Math.random() * (max - min + 1) + min)
      
      let nGerado = gerarMathRandom(nInicial, nFinal)
      console.log(typeof nGerado)
      
      setNsorteados([...nSorteados, ...[nGerado]])

      acumulado.push(nGerado)
    }
    console.log(acumulado)
  }

  return (
    <div>
      <p key={Math.random()}> Resultado é:
        <p><strong>{nSorteados.map(item => <i key={Math.random()}>{item}, </i>)}</strong></p>
      </p>
      
      <button className={styles.buttomSortear} onClick={Sortear}>{name}</button>
    </div>
  )
}
