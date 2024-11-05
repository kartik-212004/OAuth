"use client"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const HomePage = () => {
  const route = useRouter()
  const value = Cookies.get("myCookie")
  useEffect(() => {
    if (!value) {
      route.push("/login")
    }
  }, [value, route])
  return (
    <div className=" bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Wikipedia</h1>
          <input
            type="text"
            placeholder="Search Wikipedia"
            className="border rounded px-3 py-2"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 bg-white shadow-md mt-4 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Warcraft</h2>
        <p className="text-gray-700 mb-4">
          Warcraft is a franchise of video games, novels, and other media
          created by Blizzard Entertainment. The series is set in and around the
          world of Azeroth, a high fantasy setting. The franchise includes five
          core games: Warcraft: Orcs & Humans, Warcraft II: Tides of Darkness,
          Warcraft III: Reign of Chaos, World of Warcraft, and Hearthstone.
        </p>

        {/* Sidebar */}
        <aside className="bg-gray-200 p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-bold">Quick Information</h3>
          <ul>
            <li>
              <strong>Genre:</strong> Real-time strategy, MMORPG
            </li>
            <li>
              <strong>Developers:</strong> Blizzard Entertainment
            </li>
            <li>
              <strong>Publishers:</strong> Blizzard Entertainment
            </li>
            <li>
              <strong>Platforms:</strong> Microsoft Windows, macOS
            </li>
            <li>
              <strong>Release Dates:</strong> 1994 - Present
            </li>
          </ul>
        </aside>

        {/* Article Sections */}
        <section className="mt-4">
          <h3 className="text-2xl font-bold mb-2">Core Games</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Warcraft: Orcs & Humans</li>
            <li>Warcraft II: Tides of Darkness</li>
            <li>Warcraft III: Reign of Chaos</li>
            <li>World of Warcraft</li>
            <li>Hearthstone</li>
          </ul>

          <h3 className="text-2xl font-bold mb-2 mt-4">Other Media</h3>
          <p className="text-gray-700">
            Warcraft has expanded into novels, comics, board games, and a
            feature film. Each of these media explores different aspects of the
            Warcraft universe.
          </p>

          <h3 className="text-2xl font-bold mb-2 mt-4">Setting</h3>
          <p className="text-gray-700">
            The series is set in the world of Azeroth, a high fantasy setting.
            The world has a rich history, multiple races and factions, and a
            deep lore that spans millennia.
          </p>
        </section>
      </main>

    </div>
  )
}

export default HomePage
