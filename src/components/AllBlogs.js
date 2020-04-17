import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import BlogRoll from './BlogRoll';

class AllBlogs extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <BlogRoll posts={posts} />
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query AllBlogsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
                readingTime {
                  text
                }
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <AllBlogs data={data} count={count} />}
  />
)
