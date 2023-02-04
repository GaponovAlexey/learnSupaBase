import { useEffect, useState } from "react"

import { Auth, ThemeSupa } from "@supabase/auth-ui-react"
import { useRouter } from "next/router"
import { supabase } from "supabase"

export const LoginApp = () => {
  const redirect = useRouter()
  const [dataUser, setUser] = useState({})
  supabase.auth.getUser("").then((e: any) => setUser(e.data.user))
  console.log("user", dataUser)


  return (
    <div>
      <div>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["discord", "apple", "google"]}
        />
      </div>
    </div>
  )
}
