

import Link from "next/link"
import { supabase } from "supabase"
import styles from "./page.module.css"

export default function MainAPP(props: any) {
  
  return (
    <div>
      <main className={styles.main}>
        <Link href={"/registration/login"}>Login</Link>
        <p>home put down</p>
      </main>
    </div>
  )
}
