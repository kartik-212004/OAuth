"use client"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const HomePage = () => {
  const route = useRouter()
  const value = Cookies.get("myCookie")
  console.log(value)
  useEffect(() => {
    if (!value) {
      route.push("/login")
    }
  }, [value,route]) // Add route as a dependency
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold mb-4">Aircraft</h1>
      <p className="text-lg mb-6">
        An aircraft is a vehicle that is capable of flight. It includes
        airplanes, helicopters, gliders, and other flying machines. Aircraft are
        classified based on their mode of flight and other characteristics.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-4">Types of Aircraft</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Airplanes:</strong> Fixed-wing aircraft that generate lift
          through the motion of air over their wings.
        </li>
        <li>
          <strong>Helicopters:</strong> Rotorcraft that lift and propel
          themselves through the use of rotors.
        </li>
        <li>
          <strong>Gliders:</strong> Aircraft that are designed to glide through
          the air without the use of engines.
        </li>
        <li>
          <strong>Drones:</strong> Unmanned aerial vehicles (UAVs) that can be
          remotely controlled or fly autonomously.
        </li>
      </ul>

      <h2 className="text-3xl font-bold mt-8 mb-4">Interesting Facts</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          The Wright brothers made the first successful powered flight in 1903.
        </li>
        <li>The largest passenger aircraft in the world is the Airbus A380.</li>
        <li>
          Commercial aircraft typically fly at altitudes between 30,000 and
          40,000 feet.
        </li>
        <li>
          The fastest aircraft ever built is the North American X-15, which
          reached speeds of 4,520 miles per hour.
        </li>
      </ul>

      <h2 className="text-3xl font-bold mt-8 mb-4">Further Reading</h2>
      <p className="mb-6">
        For more information on aircraft, check out resources like{" "}
        <a
          href="https://en.wikipedia.org/wiki/Aircraft"
          className="text-blue-500 underline"
        >
          Wikipedia
        </a>{" "}
        or aviation-specific websites.
      </p>
    </div>
  )
}

export default HomePage
