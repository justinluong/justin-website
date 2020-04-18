import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaCalendarAlt, FaHourglassHalf} from 'react-icons/fa';


const ItemContainer = styled.div`
  margin-bottom: 30px;
  h1 {
    font-size: 24px;
    margin: 0;
    color: black;
    transition: color .1s linear;
  }
  h1:hover {
    color: #ffa500;
  }
  p {
    margin: 0;
    padding-top: 5px
  }
`;

const MetaContainer = styled.div`
  padding-top: 5px;
  span {
    padding-right: 24px;
  }
`;

const StyledCalendarIcon = styled(FaCalendarAlt)`
  color: #ffa500;
  padding-right: 10px;
`;

const StyledHourglassIcon = styled(FaHourglassHalf)`
  color: #ffa500;
  padding-right: 10px;
`;

const BlogRollItem = ({ title, readingTime, date, excerpt, slug }) => {
  return (
    <ItemContainer>
      <Link to={slug}>
        <h1>{title}</h1>
      </Link>
      <MetaContainer>
        <StyledHourglassIcon />
        <span>{readingTime}</span>
        <StyledCalendarIcon />
        <span>{date}</span>
      </MetaContainer>
      <p>{excerpt}</p>
    </ItemContainer>
  )
}

BlogRollItem.propTypes = {
  title: PropTypes.string,
  readingTime: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
}

export default BlogRollItem;