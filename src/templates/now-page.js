import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Container from '../components/containers/Container';
import ArticleContainer from '../components/containers/ArticleContainer';

const StyledHeading = styled.h1`
  font-size: 32px;
  margin-bottom: 5px;
`;

const MetaContainer = styled.div`
  span {
    padding-right: 24px;
  }
`;

const StyledCalendarIcon = styled(FaCalendarAlt)`
  color: #ffa500;
  padding-right: 10px;
`;

const EmphasisContainer = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    margin: 30px;
  }
`;

export const NowPageTemplate = ({ image, content, contentComponent, date }) => {
  const PageContent = contentComponent || Content

  return (
    <ArticleContainer>
      <Img 
        fluid={!!image.childImageSharp ? image.childImageSharp.fluid: image} 
      />
      <StyledHeading>What I'm Doing Now</StyledHeading>
      <MetaContainer>
        <span>
          <StyledCalendarIcon /> Updated {date}
        </span>
      </MetaContainer>
      <PageContent className="content" content={content} />
      <EmphasisContainer>
        <em>
          This is a
          <a href="https://nownownow.com/about"> now </a>
          page.
        </em>
      </EmphasisContainer>
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
          date={post.frontmatter.date}
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
        date(formatString: "MMMM DD, YYYY")
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
