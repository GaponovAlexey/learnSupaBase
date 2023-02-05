import { useEffect, useState } from "react"

import { Auth, ThemeSupa } from "@supabase/auth-ui-react"
import { useRouter } from "next/router"
import { supabase } from "supabase"

export const LoginApp = () => {
  const r = useRouter()
  const { a, b } = r.query
  console.log("query", a, b)

  const [dataUser, setUser] = useState({})
  console.log("dataUser", dataUser)

  supabase.auth.onAuthStateChange(async (event) => {
    setUser(event)
    if (event !== "SIGNED_OUT") {
      // r.push("/success");
    } else {
      // r.push("/");
    }
  })

  const res = (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      onlyThirdPartyProviders={true}
      providers={["discord", "apple", "google"]}
      redirectTo={"/success"}
    />
  )
    useEffect(() => {
      console.log("res",res)
      
    },[])
    
  return (
    <div>
      <div>{res}</div>
    </div>
  )
}
