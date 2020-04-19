import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { createGlobalStyle } from 'styled-components';
import 'typeface-montserrat';
import 'typeface-hind';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  * {
    font-family: Hind;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat;
  }

  a {
    text-decoration: none;
    color: #234ef3;
  }

  li::marker {
    color: red;
    content: "•";
  }

`;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <meta name="theme-color" content="#ffa500" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default TemplateWrapper
