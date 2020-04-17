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
            key={post.id}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            readingTime={post.fields.readingTime.text}
            excerpt={post.excerpt}
            slug={post.fields.slug}
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