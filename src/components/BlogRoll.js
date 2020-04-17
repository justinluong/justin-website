import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import styled from 'styled-components';

import BlogRollItem from './BlogRollItem';

const BlogRollContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogRoll = ({ posts }) => {
  return (
    <BlogRollContainer>
      {posts &&
        posts.map(({ node: post }) => (
          <BlogRollItem
            featuredImage={post.frontmatter.featuredimage}
            key={post.id}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            readingTime={post.fields.readingTime.text}
            excerpt={post.excerpt}
          />
        ))}
    </BlogRollContainer>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogRoll;