import { useRouter } from "next/router"

export default function Success() {
  const r = useRouter()
  const quer = r.query
  console.log("query", quer)
  
  return (
    <div>suc</div>
  )
}