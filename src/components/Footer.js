import React from 'react'
import styled from 'styled-components';
import {
  FaGoodreadsG, 
  FaLinkedinIn,
  FaYoutube,
  FaInstagram
} from 'react-icons/fa';

const IconButton = ({ className, to, children}) => {
  return <a className={className} href={to}>{children}</a>
}

const StyledIconButton = styled(IconButton)`
  color: #ffa500;
  padding: 0px 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
  padding 50px 20px;
  @media only screen and (min-width: 768px) {
    padding: 50px;
  }
`;

const Footer = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default Footer
