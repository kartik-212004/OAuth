import { useState, createContext } from "react"
import Cookies from "js-cookie"

const AuthContext = createContext()
export function AuthProvider({ children }) {
  const [authStatus, setStatus] = useState(false)

  function logout() {
    Cookies.remove("myCookie")
    setStatus(false)
  }

  function login() {
    Cookies.set("myCookie", "true")
    setStatus(true)
  }

  return (
    <AuthContext.Provider value={{ authStatus, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
