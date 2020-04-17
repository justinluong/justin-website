import React from 'react'
import styled from 'styled-components';
import {
  FaGoodreadsG, 
  FaLinkedinIn,
  FaYoutube,
  FaInstagram
} from 'react-icons/fa';

import Container from '../components/containers/Container';

const IconButton = ({ className, to, children}) => {
  return <a className={className} href={to}>{children}</a>
}

const StyledIconButton = styled(IconButton)`
  color: #ffa500;
  padding: 0px 10px;
`;

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 15px 20px;
  @media only screen and (min-width: 768px) {
    padding: 30px 50px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <StyledIconButton to="https://www.goodreads.com/jb_luong">
        <FaGoodreadsG size={28}/>
      </StyledIconButton> 
      <StyledIconButton to="https://www.instagram.com/jb_luong">
        <FaInstagram size={28}/>
      </StyledIconButton> 
      <StyledIconButton to="https://www.linkedin.com/in/justin-luong">
        <FaLinkedinIn size={28}/>
      </StyledIconButton> 
      <StyledIconButton to="https://www.youtube.com/channel/UCo9GCESrgIM_eDVzTy1jhFA">
        <FaYoutube size={28}/>
      </StyledIconButton> 
    </FooterContainer>
  )
}

export default Footer
