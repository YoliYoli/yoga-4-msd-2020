import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1>Here is how to get in touch</h1>
 
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
