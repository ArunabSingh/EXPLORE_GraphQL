/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { GolbalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {

  return (
    <>
    <GolbalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
