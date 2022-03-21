import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Index, { DataProps } from '../components/pages'

const BlogEnIndex = (props: PageProps<DataProps>) => <Index {...props} />

export default BlogEnIndex

export const pageQuery = graphql`
  query IndexEnQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { langKey: { regex: "/(en|any)/" } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
