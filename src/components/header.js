import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div class="mb-2 sm:mb-0">
          <a href="/" class="text-2xl font-bold sm:tracking-tight text-gray-900 hover:text-gray-700"><span role="img" aria-label="construction">🚧</span> Manjoot <span role="img" aria-label="construction">🚧</span></a>
        </div>
        <div>
          <a href="https://www.github.com/manjoot" class="text-lg sm:tracking-tight text-gray-800 hover:text-gray-400 ml-2" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/manjoot" class="text-lg sm:tracking-tight text-gray-800 hover:text-gray-400 ml-2" target="_blank">LinkedIn</a>
          <a href="https://drive.google.com/uc?export=download&id=1VJGnC-ssGajZsyXpMP-OuYyckHxU0vpS" class="text-lg sm:tracking-tight text-gray-800 hover:text-gray-400 ml-2" target="_blank">CV</a>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
