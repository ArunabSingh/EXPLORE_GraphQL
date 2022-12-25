import * as React from "react"
import Email from "../components/Email"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials id="about" />
    <Stats id="about" />
    <Email />
  </Layout>
)

export default IndexPage
