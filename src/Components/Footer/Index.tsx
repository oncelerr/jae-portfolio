import styles from "./styles.module.scss"
import { useNavigate } from "react-router-dom"

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles['footer-wrapper']}>
        hello
      </div>
    </>
  )
}

export default Footer