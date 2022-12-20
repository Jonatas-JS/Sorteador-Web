import styles from './Sorteio.module.css'

export function Sorteio() {
  return (
    <div className={styles.sorteio}>
      <p>Defina os parâmetros</p>
      <div className={styles.parametros}>
        <div className={styles.parametrosNumericos}></div>
      </div>
    </div>
  )
}