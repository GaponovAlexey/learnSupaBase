import { useRouter } from "next/router"
import { supabase } from "supabase"
// import { MainAPP } from "./components/Main"

export default function Home() {
  const as = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    console.log("user", user)
  }
  as()
  return (
    <div>
      start
      {/* <MainAPP /> */}
    </div>
  )
}
