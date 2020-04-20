import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Container from '../components/containers/Container';
import ArticleContainer from '../components/containers/ArticleContainer';

const StyledHeading = styled.h1`
  font-size: 32px;
  margin-bottom: 5px;
`;

export const NowPageTemplate = ({ image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <ArticleContainer>
      <Img 
        fluid={!!image.childImageSharp ? image.childImageSharp.fluid: image} 
      />
      <StyledHeading>What I'm Doing Now</StyledHeading>
      <PageContent className="content" content={content} />

    </ArticleContainer>
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
      <Container>
        <NowPageTemplate
          image={post.frontmatter.image}
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          content={post.html}
        />
      </Container>
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
            fluid (maxWidth: 700, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
