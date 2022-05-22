import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children, dark, headerClassName, contentClassName }) => {
  return (
    <>
      <Header dark={dark} headerClassName={headerClassName} />
      <main className={contentClassName}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
