import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import Layout from "../components/Layout";

const Container = styled.section`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  max-width: 1024px;
  margin: auto;
  padding: 20px 20px 0;
  @media only screen and (min-width: 768px) {
    flex-direction: row; 
    padding: 30px 50px 0;
  }
`;

const StyledImg = styled(props => <Img {...props} />)`
  min-width: 280px;
  width: 50%;
  align-self: center;
  @media only screen and (min-width: 768px) {
    aligh-self: flex-start;
  }
`;

const IntroContainer = styled.div`
  h1, h3 {
    margin: 0;
  }
  h1 {
    padding-top: 10px;
    color: #234ef3;
  }
  div {
    padding: 0px 30px;
  }
  @media only screen and (min-width: 768px) {
    padding: 0 20px;
    h1 {
      font-size: 36px;
      padding-top: 0px;
    }
    div {
      padding: 10px 30px;
    }
  }
`;

export const IndexPageTemplate = (props) => {
  console.log(props)
  const { image } = props
  return (
    <Container>
      <StyledImg fluid={!!image.childImageSharp ? image.childImageSharp.fluid : image} />
      <IntroContainer>
        <h1>Welcome to my crib.</h1>
        <div>
          <h3>Programmer</h3>
          <h3>Maths Tutor</h3>
          <h3>Bjj White Belt</h3>
        </div>
      </IntroContainer>
    </Container>
  )
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid (maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
