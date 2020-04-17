import React from 'react'

import Layout from '../../components/Layout'
import AllBlogs from '../../components/AllBlogs'
import Container from '../../components/containers/Container';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <AllBlogs />
        </Container>
      </Layout>
    )
  }
}
