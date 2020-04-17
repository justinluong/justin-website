import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Container from './containers/Container';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavContainer = styled(Container)`
  max-width: 1024px;
  margin: auto;
  padding: 15px 20px;
  @media only screen and (min-width: 768px) {
    padding: 30px 50px;
  }
`;

const StyledLink = styled(Link)`
  padding-right: 10px;
  color: #234ef3;
  font-family: Montserrat;
  text-decoration: none;
  font-size: 20.8px;
  font-weight: 600;
  @media only screen and (min-width: 768px) {
    padding: 0 0 0 20px;
  }
`;

const ShortLogo = styled(Link)`
  color: black;
  font-family: Montserrat;
  text-decoration: none;
  font-weight: 800;
  font-size: 32px;
  @media only screen and (min-width: 768px) {
    display: none;
    padding: 0;
  }
`;

const LongLogo = styled(Link)`
  color: black;
  font-family: Montserrat;
  text-decoration: none;
  font-weight: bold;
  font-size: 32px;
  display: none;
  @media only screen and (min-width: 768px) {
    padding: 0;
    display: inline;
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
      <NavContainer
        role="navigation"
        aria-label="main-navigation"
      >
        <StyledNav
          role="navigation"
          aria-label="main-navigation" 
        >
          <ShortLogo to="/">
            JL
          </ShortLogo>
          <LongLogo to="/">
            Justin Luong
          </LongLogo>
          <div>
            <StyledLink to="/now">
              Now
            </StyledLink>
            <StyledLink to="/blog">
              Blog
            </StyledLink>
          </div>
        </StyledNav>
      </NavContainer>
    )
  }
}

export default Navbar
