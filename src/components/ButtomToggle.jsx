import { useState } from "react";
import styles from "./ButtomToggle.module.css"

export const Toggle = ({ label, toggled, onclick }) => {
  const [isToggled, toggle] = useState(toggled)

  const callback = () => {
    toggle(!isToggled)
    onclick(!isToggled)
  }

  return (
    <div className={styles.stylesToggle}>
      <label className={styles.buttomToggle}>
        <input type="checkbox" defaultChecked={isToggled} onClick={callback}/>
        <span />
        <strong>{label}</strong>
      </label>
    </div>
  )
}