import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDesc,
    siteTitle,
    siteURL,
    image,
    twitterUsername,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta mame="twitter:card" content="summary_large_image" />
      <meta mame="twitter:creator" content={twitterUsername} />
      <meta mame="twitter:title" content={siteTitle} />
      <meta mame="twitter:description" content={siteDesc} />
      <meta mame="twitter:image" content={`${siteURL}${image}`} />
    </Helmet>
  )
}

export default SEO
