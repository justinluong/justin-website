import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const Container = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  @media only screen and (min-width: 768px) {
    padding: 30px 50px;
  }
`;

export const NowPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Container>
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
  query NowPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
