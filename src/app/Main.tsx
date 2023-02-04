"use client"; // this is a client component

import Link from "next/link"
import { useState } from "react"
import styles from "./page.module.css"




export const Main = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div>
      <main className={styles.main}>
        {isLogin ? (
          <Link href={"/registration/login"}>Login</Link>
        ) : (
          <Link href={"/registration/LogOut"}>LogOut</Link>
        )}
        <p>home put down</p>
      </main>
    </div>
  )
}
