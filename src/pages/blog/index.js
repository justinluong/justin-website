import React from 'react'
import styled from 'styled-components';

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

const Container = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    padding: 0 50px;
  }
`;

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <BlogRoll />
        </Container>
      </Layout>
    )
  }
}
