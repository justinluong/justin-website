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

  h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat;
  }

  p, em, strong, i, b, a {
    font-family: Hind;
  }
  
  a {
    text-decoration: none;
    color: #234ef3;
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

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default TemplateWrapper
