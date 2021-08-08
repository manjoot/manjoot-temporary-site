import React from "react";


const Footer = () => {
  return (
    <footer class="footer-1 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
    <hr/>
    <div class="mb-2 sm:mb-0">
      <p class="text-lg sm:tracking-tight text-gray-500 ml-2" >Created by Manjoot Narwal, using GatsbyJS and Tailwind CSS.</p>
         
    </div>
    <div>
          <a href="https://www.manjoot.github.io" class="text-lg sm:tracking-tight text-gray-400 hover:text-gray-200 ml-2" target="_blank">Visit old site</a>
    </div>
    </footer>
  )
}

export default Footer;
