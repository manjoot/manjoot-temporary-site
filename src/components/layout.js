/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="bg-white">
        <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">

          {/* Introduction text */}
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
              Hi there,
            </h2>
            <p className="my-3 text-4xl sm:text-5xl lg:text-6xl font-bold sm:tracking-tight text-gray-900">
              I'm Manjoot.
            </p>
            <p className="text-xl text-gray-500">
              Welcome to my <b>temporary </b> site.
            </p>
          </div>

          <br />
          <br />
          <br />

          {/* Questions */}          

          <div className="text-left">

            {/* Why do you have a temporary site? */}
            <p className="my-3 text-xl sm:text-2xl lg:text-3xl font-bold sm:tracking-tight text-gray-900">
              Why do you have a temporary site?
            </p>
            <p className="text-l text-gray-500">
              I'm currently working on an exciting new refresh of my personal website, that I will be building using <b>Gatsby</b> and <b>Tailwind</b>. I needed a temporary site that will act as a placeholder during development.
            </p>
            <br/>

            {/* Why are you building a new site? */}
            <p className="my-3 text-xl sm:text-2xl lg:text-3xl font-bold sm:tracking-tight text-gray-900">
              Why are you building a new site?
            </p>
            <p className="text-l text-gray-500">
              Great quesiton! The original was created in 2019 whilst I was in sixth form using static <b>HTML</b> and <b>Javascript</b>.
              <br/>
              <br/>
              I felt a refresh was overdue, and the opportunity to get creative using exciting frameworks such as <b>Gatsby</b> and <b>Tailwind</b> was one I could not miss!
            </p>
            <br/>

            {/* Can I access the original?*/}
            <p className="my-3 text-xl sm:text-2xl lg:text-3xl font-bold sm:tracking-tight text-gray-900">
              Can I access the original?
            </p>
            <p className="text-l text-gray-500">
              You can, however the contact us form functionality has been removed. Do check out the site nonetheless, the link is&nbsp;  
              <a className="text-blue-600 hover:text-blue-400" href="https://manjoot.github.io">
              here
              </a>
              .
            </p>
            <br/>

            {/* Where can I find your projects?*/}
            <p className="my-3 text-xl sm:text-2xl lg:text-3xl font-bold sm:tracking-tight text-gray-900">
              Where can I find your projects?
            </p>
            <p className="text-l text-gray-500">
              My projects can be found on Github, which you can access&nbsp;  
              <a className="text-blue-600 hover:text-blue-400" href="https://www.github.com/manjoot">
              here
              </a>
              .
            </p>

          </div>
        </div>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
