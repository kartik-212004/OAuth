"use client"
import Link from "next/link"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useState } from "react"
export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(true)
  const route = useRouter()
  function logout() {
    setLoggedIn(false)
    Cookies.remove("myCookie")
    route.push("/login")
  }
  return (
    <header className="bg-black text-white flex justify-between items-center p-4">
      <div className="text-lg font-bold">OLA</div>
      <nav className="space-x-4">
        <Link href="/login" className="hover:underline">
          Login
        </Link>
        <Link href="/signin" className="hover:underline">
          Sign In
        </Link>
        {loggedIn && (
          <Link href="/" className="hover:underline">
            Home
          </Link>
        )}
      </nav>
      <div className="space-x-3">
        <button onClick={logout} className="bg-red-600 rounded py-2 px-4 ">
          Logout
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Book an Ola Cab
        </button>
      </div>
    </header>
  )
}
