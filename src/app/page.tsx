import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      start
      <button>Discord</button>
      <form action="form">
        <p>login</p>
        <input type="login" />
        <p>password</p>
        <input type="password" />
      </form>
      <button>logout</button>
    </main>
  )
}
