import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    # file(relativePath: { eq: "bulge.jpg" }) {
    file(relativePath: { eq: "headshot-ltbl.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline">
              <h1>i'm Honorio</h1>
              <h4>Site Reliability/DevOps Engineer</h4>
              <Link to="/contact" className="btn">
                contact me
              </Link>
              <SocialLinks />
            </div>
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
