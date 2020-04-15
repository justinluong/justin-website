import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
  padding 0 20px;
  @media only screen and (min-width: 768px) {
    padding: 0 50px;
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <Container>
        <h1>I'm the footer</h1>
      </Container>
    )
  }
}

export default Footer
