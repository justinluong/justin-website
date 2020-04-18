import React from 'react'
import styled from 'styled-components';

import Layout from '../../components/Layout'
import AllBlogs from '../../components/AllBlogs'
import Container from '../../components/containers/Container';
import ArticleContainer from '../../components/containers/ArticleContainer';

const StyledHeading = styled.h1`
  font-size: 42px;
  margin-top: 21px;
  margin-bottom: 21px;
  @media only screen and (min-width: 768px) {
    margin-top: 42px;
    margin-bottom: 42px;
  }
`;

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <ArticleContainer>
            <StyledHeading>All Posts</StyledHeading>
            <AllBlogs />
          </ArticleContainer>
        </Container>
      </Layout>
    )
  }
}
