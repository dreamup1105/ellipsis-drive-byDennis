import React from "react"
import { Link } from "gatsby"

export const CustomButton = ({ className, text, link, navLink, button }) => {
  return (
    <>
      {button && (
        <button
          className={`${className} whitespace-nowrap rounded-md inline-block cursor-pointer`}
        >
          {text}
        </button>
      )}
      {link && (
        <a
          className={`${className} whitespace-nowrap rounded-md inline-block cursor-pointer`}
          href={link}
        >
          {text}
        </a>
      )}
      {navLink && (
        <Link
          className={`${className} whitespace-nowrap rounded-md inline-block cursor-pointer`}
          to={navLink}
        >
          {text}
        </Link>
      )}
    </>
  )
}
