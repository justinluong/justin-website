import styled from 'styled-components';

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    padding: 0 50px;
  }
`;

export default Container;