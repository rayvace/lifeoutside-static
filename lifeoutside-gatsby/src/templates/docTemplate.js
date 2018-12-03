import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="container">
        <h1>{frontmatter.title}</h1>
        <div
          className="doc-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <br/>
        <p>Last updated: {frontmatter.date}</p>
        <br/>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
