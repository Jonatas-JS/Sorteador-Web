import styles from './SideBar.module.css'
import { DiceFive, FileText, FileArrowUp, Planet } from "phosphor-react"

export function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.logoImage}>
        <Planet size={50} />
        <span>Sorteador Web</span>
      </div>

      <div className={styles.menu}>
        <ul className={styles.funcoes}>
          <li ><a href="#" title="Sortear Números"><DiceFive size={50} /></a></li>
          <li><a href="#" title="Sortear Nomes"><FileText size={46} /></a></li>
          <li><a href="#" title="Importar Lista"><FileArrowUp size={46} /></a></li>
        </ul>
      </div>
    </div>
  )
}
