import { useRouter } from "next/router"
import { useState } from "react"
import { useSession } from "@supabase/auth-helpers-react"

export default function Success() {
  
  const session = useSession()
  console.log("session",session)
  
  return (
    <div>suc</div>
  )
}