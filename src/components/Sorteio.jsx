import styles from './Sorteio.module.css'
import { Toggle } from './ButtomToggle'

export function Sorteio() {
  const logState = state => {
    console.log("Toggled:", state)
  }

  return (
    <div className={styles.sorteio}>
      <h3>Defina os parâmetros</h3>
      <div className={styles.parametros}>
        <div className={styles.parametrosNumericos}>
          <h2>Sortear <input type="number" name="nQuantidade" id="nQuantidade" /> números</h2>
          <h2>entre <input type="number" name="nInicial" id="nInicial" /> e <input type="number" name="nFinal" id="nFinal" /></h2>
        </div>

        <div>
          <Toggle 
            label="Visualizar o resultado somente ao clicar!"
            toggled={false}
            onClick={logState}
          />
        </div>
      </div>
    </div>
  )
}