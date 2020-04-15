import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.nav`
  margin-top: 0;
  padding-bottom: 10px;
  padding-top: 10px;
  @media only screen and (min-width: 768px) {
    margin-top: 50px;
    margin-bottom: 20px;
    padding:0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
  }
`;

const StyledLink = styled(Link)`
  padding-right: 10px;
  color: #234ef3;
  font-family: Montserrat;
  text-decoration: none;
  font-size: 20.8px;
  @media only screen and (min-width: 768px) {
    padding: 0 0 0 20px;
  }
`;

const Logo = styled(props => <Link {...props} />)`
  color: black;
  font-family: Montserrat;
  text-decoration: none;
  font-weight: bold;
  font-size: 32px;
  padding-bottom: 10px;
  @media only screen and (min-width: 768px) {
    padding: 0;
  }
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  render() {
    return (
      <StyledNav
        role="navigation"
        aria-label="main-navigation"
      >
        <Container>
          <Logo to="/">
            Justin Luong
          </Logo>
          <div>
            <StyledLink to="/about">
              Now
            </StyledLink>
            <StyledLink to="/blog">
              Blog
            </StyledLink>
          </div>
        </Container>
      </StyledNav>
    )
  }
}

export default Navbar
