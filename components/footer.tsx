import React from "react"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center flex-col md:flex-row">
        <div className="flex items-center mb-2 md:mb-0">
          <span className="text-lg font-bold hover:text-gray-400 transition duration-300">
            MyLogo
          </span>
        </div>

        <div className="flex space-x-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
