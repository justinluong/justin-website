import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image';
import styled from 'styled-components';
import { FaCalendarAlt, FaHourglassHalf} from 'react-icons/fa';

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Container from '../components/containers/Container';
import ArticleContainer from '../components/containers/ArticleContainer';

const StylesContainer = styled.div`
  img {
    width: 100%
  }
`;

const Title = styled.h1`
  margin-bottom: 0;
  font-size: 32px;
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

export const BlogPostTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  featuredImage,
  date,
  readingTime
}) => {
  const PostContent = contentComponent || Content

  let imageComponent = null;
  if (!!featuredImage) {
    const image = !!featuredImage.childImageSharp ? featuredImage.childImageSharp.fluid : featuredImage;
    imageComponent = <Img fluid={image} />
  }

  return (
    <ArticleContainer>
      {helmet || ''}
      <div>
        { imageComponent }
        <Title>{title}</Title>
        <MetaContainer>
          <StyledHourglassIcon />
          <span>{readingTime}</span>
          <StyledCalendarIcon />
          <span>{date}</span>
        </MetaContainer>
        <StylesContainer>
          <PostContent content={content} />
        </StylesContainer>
      </div>
    </ArticleContainer>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Container>
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          helmet={
            <Helmet titleTemplate="%s | Blog">
              <title>{`${post.frontmatter.title}`}</title>
              <meta
                name="description"
                content={`${post.frontmatter.description}`}
              />
            </Helmet>
          }
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
          featuredImage={post.frontmatter.featuredimage}
          date={post.frontmatter.date}
          readingTime={post.fields.readingTime.text}
        />
      </Container>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage {
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
