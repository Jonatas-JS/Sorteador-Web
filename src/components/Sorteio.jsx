import styles from './Sorteio.module.css'

export function Sorteio() {
  return (
    <div className={styles.sorteio}>
      <h3>Defina os parâmetros</h3>
      <div className={styles.parametros}>
        <div className={styles.parametrosNumericos}>
          <h2>Sortear <input type="number" name="nQuantidade" id="nQuantidade" /> números</h2>
          <h2>entre <input type="number" name="nInicial" id="nInicial" /> e <input type="number" name="nFinal" id="nFinal" /></h2>
        </div>

        <div>
          <label htmlFor="checkbox" className={styles.toggler}>
            <input type="checkbox" id="checkbox" />
            <span className={styles.ball}></span>
            <i className={styles.sun}></i>
            <i className={styles.moon}></i>
          </label>
        </div>
      </div>
    </div>
  )
}