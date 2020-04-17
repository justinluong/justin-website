import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const GridImage = styled.div`
  grid-column-start: 3;
`;

const GridContent = styled.div`
  grid-column-start: 2;
`;

const GridMeta = styled.div`
  grid-column-start: 1;
`;


const BlogRollItem = ({ featuredImage, title, readingTime, date, excerpt}) => {
  console.log(featuredImage);
  return (
    <Grid>
      <GridMeta>
        <p>{readingTime}</p>
        <p>{date}</p>
      </GridMeta>
      <GridContent>
        <p>{title}</p>
        <p>{excerpt}</p>
      </GridContent>
      <GridImage>
        <PreviewCompatibleImage
          imageInfo={{
            image: featuredImage,
            alt: `featured image thumbnail for post ${title}`,
          }}
        />
      </GridImage>
    </Grid>
  )
}

BlogRollItem.propTypes = {
  title: PropTypes.string,
  readingTime: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
}

export default BlogRollItem;