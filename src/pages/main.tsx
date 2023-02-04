import React from "react"

export default function HomePage() {
  const [login, setLogin] = React.useState("")
  const [password, setPassword] = React.useState("")
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
