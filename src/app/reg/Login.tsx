import { useEffect, useState } from "react"

import { Auth, ThemeSupa } from "@supabase/auth-ui-react"
import { useRouter } from "next/router"
import { supabase } from "supabase"



export const LoginApp = () => {
  const redirect = useRouter()
  const [dataUser, setUser] = useState({})

 

 

  
  return (
    <div>
      <div>
        <Auth
          supabaseClient={supabase}
          appearance={{theme: ThemeSupa}}
          theme="dark"
          providers={["discord", "apple"]}
        />
      </div>
    </div>
  )
}
