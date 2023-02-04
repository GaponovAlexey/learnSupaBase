import Link from "next/link"
import React from "react"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <p>home put down</p>
      <Link href={"/main"}>Login</Link>
    </main>
  )
}
