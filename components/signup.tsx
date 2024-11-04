"use client"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
export function Signup() {
  const [email, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const route = useRouter()
  async function check(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const response = await axios.post("http://localhost:3000/api/user/login", {
      email,
      password,
    })
    const data = await response.data.message
    if (!response.data.status) {
      setError(data)
      return setSuccess("")
    }
    setSuccess(data)
    setError("")
    console.log("object")
    Cookies.set("myCookie", response.data.existingMail.id, {
      secure: true,
      sameSite: "strict",
    })

    route.push("/")
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border h-[480px] border-gray-200">
        <form action="" method="post">
          <header className="w-full text-center text-3xl font-semibold mb-6 text-gray-800">
            Log In
          </header>

          <div className="mb-5">
            <label className="block text-gray-600 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) => {
                setMail(e.target.value)
              }}
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-600 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>

          <button
            onClick={check}
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
          {success && (
            <div className="text-center bg-green-500 h-8 text-white font-semibold rounded-md my-3 flex items-center justify-center">
              {success}
            </div>
          )}
          {error && (
            <div className="text-center bg-red-500 h-8 text-white font-semibold rounded-md my-3 flex items-center justify-center">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
