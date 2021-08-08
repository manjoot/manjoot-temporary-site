import React from 'react'

export default function Questions() {
    return(
        <>
          {/* Questions */}          

          <div className="text-left bg-gray-100 rounded-lg p-10">

            {/* Why have you built a temporary site? */}
            <p className="my-3 text-xl sm:text-2xl lg:text-3xl font-bold sm:tracking-tight text-gray-900">
              <span role="img" aria-label="construction">🚧</span> Why have you built a temporary site?
            </p>
            <p className="text-l text-gray-500">
              Great quesiton! I'm currently <a className="text-blue-600 font-bold hover:text-blue-400" href="https://www.github.com/manjoot/manjoot-site" target="_blank">working on</a> an exciting new refresh of my personal website, that I will be building using <b>Gatsby</b> and <b>Tailwind</b>. I needed a temporary site that will act as a placeholder whilst I develop the new one, so I put this together!
            </p>
            <br/>

            {/* Why are you building a new site? */}
            <p className="my-3 text-xl sm:text-2xl lg:text-3xl font-bold sm:tracking-tight text-gray-900">
              <span role="img" aria-label="construction">🚧</span> Why are you building a new site?
            </p>
            <p className="text-l text-gray-500">
              The original was created in 2019 whilst I was in sixth form using static <b>HTML</b> and <b>Javascript</b>.
              <br/>
              <br/>
              I felt a refresh was overdue, and an opportunity to get creative with exciting frameworks such as <b>Gatsby</b> and <b>Tailwind</b> was one I could not miss!
            </p>
            <br/>

            {/* Where can I find your projects?*/}
            <p className="my-3 text-xl sm:text-2xl lg:text-3xl font-bold sm:tracking-tight text-gray-900">
              <span role="img" aria-label="construction">🚧</span> Where can I find your projects?
            </p>
            <p className="text-l text-gray-500">
              My projects can be found on Github, which you can access&nbsp;  
              <a className="text-blue-600 hover:text-blue-400" href="https://www.github.com/manjoot" target="_blank">
              here
              </a>
              .
            </p>
            <br/>

            {/* Can I access the original?*/}
            <p className="my-3 text-xl sm:text-2xl lg:text-3xl font-bold sm:tracking-tight text-gray-900">
              <span role="img" aria-label="construction">🚧</span> Can I access the old site?
            </p>
            <p className="text-l text-gray-500">
              Yep! You can still go to the original site, the link is&nbsp;  
              <a className="text-blue-600 hover:text-blue-400" href="https://manjoot.github.io" target="_blank">
              here
              </a>
              .
            </p>
            <br/>
            
          </div>
        </>
    )
}