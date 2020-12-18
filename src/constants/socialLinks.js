import React from "react"
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/HonorioTaveras",
  },
  // {
  //   id: 2,
  //   icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
  //   url: "https://www.facebook.com/honorio.taveras",
  // },
  {
    id: 2,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/honoriosarevat/",
  },
  // {
  //   id: 4,
  //   icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
  //   url: "https://www.twitter.com",
  // },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/TaverasHonorio",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
