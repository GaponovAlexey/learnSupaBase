import { useEffect, useState } from "react"

import { Auth, ThemeSupa } from "@supabase/auth-ui-react"
import { useRouter } from "next/router"
import { supabase } from "supabase"



export const LoginApp = () => {
  const redirect = useRouter()
  const [dataUser, setUser] = useState({})



 
  console.log("user", dataUser)

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
      <button>Discord</button>
      <form action="form">
        <p>login</p>
        <input
          type="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <p>password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button>logout</button>
    </div>
  )
}
