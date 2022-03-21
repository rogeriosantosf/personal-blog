import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Index, { DataProps } from '../components/pages'

const BlogIndex = (props: PageProps<DataProps>) => <Index {...props} />

export default BlogIndex

export const pageQuery = graphql`
  query IndexPtQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { langKey: { regex: "/(pt|any)/" } } }
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
