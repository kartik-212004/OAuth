export default function Navbar() {
  return (
    <header className="bg-black text-white flex justify-between items-center p-4">
      <div className="text-lg font-bold">OLA</div>
      <nav className="space-x-4">
        <a href="/login" className="hover:underline">
          Login
        </a>
        <a href="/signin" className="hover:underline">
          Sign In
        </a>
        <a href="/" className="hover:underline">
          Home
        </a>
      </nav>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Book an Ola Cab
      </button>
    </header>
  )
}
