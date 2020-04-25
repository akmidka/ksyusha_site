/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header.jsx"
import Footer from "./footer.jsx"
import "./layout.css"

const Layout = ({ 
    children, 
    activeLinkHome,
    activeLinkServices,
    activeLinkArticles,
    activeLinkReports,
    activeLinkReviews, 
    activeLinkHomeMobile,
    activeLinkServicesMobile,
    activeLinkArticlesMobile,
    activeLinkReportsMobile,
    activeLinkReviewsMobile,
}) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="wrapper">
      <Header 
        activeLinkHome={activeLinkHome}
        activeLinkServices={activeLinkServices}
        activeLinkArticles={activeLinkArticles}
        activeLinkReports={activeLinkReports}
        activeLinkReviews={activeLinkReviews}
        activeLinkHomeMobile={activeLinkHomeMobile}
        activeLinkServicesMobile={activeLinkServicesMobile}
        activeLinkArticlesMobile={activeLinkArticlesMobile}
        activeLinkReportsMobile={activeLinkReportsMobile}
        activeLinkReviewsMobile={activeLinkReviewsMobile}
      />      
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
// style={{borderBottom: "5px solid #58AFCA"}}