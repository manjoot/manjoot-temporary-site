import React from 'react'

export default function Title(){
    return(
        <>
            {/* Introduction text */}
            <div className="text-center">
                <div>
                <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
                Hi there <span role="img" aria-label="wave">👋</span>,
                </h2>
                <p className="my-3 text-4xl sm:text-5xl lg:text-6xl font-bold sm:tracking-tight text-gray-900">
                I'm Manjoot.&nbsp;&nbsp;&nbsp;      <img className="inline object-cover w-32 h-32 mr-2 rounded-full " src="https://avatars.githubusercontent.com/u/51864032?v=4" alt="Me"/>
                </p>

                </div>
                

                <p className="text-xl text-gray-500">
                 Welcome to my <b>temporary </b> site.
                </p>

                <br/>
                <br/>
            </div>
        </>
    )
}