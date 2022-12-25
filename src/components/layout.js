import * as React from "react"
import { useState } from "react"
import Dropdown from "./Dropdown"
import Footer from "./Footer"
import Header from "./Header"
import { GolbalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <GolbalStyle />
      <Header toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
