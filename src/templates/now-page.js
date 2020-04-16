import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const Container = styled.section`
  max-width: 700px;
  margin: auto;
  padding: 20px 20px 0;
  @media only screen and (min-width: 768px) {
    padding: 30px 50px 0;
  }
`;

export const NowPageTemplate = ({ image, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  console.log(image)
  return (
    <Container>
      <Img 
        fluid={!!image.childImageSharp ? image.childImageSharp.fluid: image} 
      />
      <h1>{title}</h1>
      <PageContent className="content" content={content} />
    </Container>
  )
}

NowPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const NowPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <NowPageTemplate
        image={post.frontmatter.image}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

NowPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default NowPage 

export const nowPageQuery = graphql`
  query NowPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "now-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid (maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
