import { useState } from 'react'
import styles from './ButtomSortear.module.css'

export function ButtomSortear({ name }) {
  const [nSorteados, setNsorteados] = useState([])

  function Sortear() {
    const nQuantidade = Number(document.querySelector('#nQuantidade').value)
    const nInicial = Number(document.querySelector('#nInicial').value)
    const nFinal = Number(document.querySelector('#nFinal').value)
    const Acc = []

    
    for(let i = 0; i < nQuantidade; i++) {
      let gerarMathRandom = (min, max) => 
      Math.floor(Math.random() * (max - min + 1) + min)
      
      let nGerado = gerarMathRandom(nInicial, nFinal)
      Acc.push(nGerado)
    }
    setNsorteados(Acc)
  }

  return (
    <div>
      <p key={Math.random()}> Resultado é:
        <p className={styles.resultadoNumerico}>{nSorteados.map(item => <i key={Math.random()}>{item} - </i>)}</p>
      </p>
      
      <button className={styles.buttomSortear} onClick={Sortear}>{name}</button>
    </div>
  )
}
