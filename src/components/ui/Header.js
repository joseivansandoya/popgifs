import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const HeaderWrapper = styled.div`
  background: linear-gradient(#5c2674, #391962);
  padding: 32px 0;
  margin-bottom: 30px;

  .container {
    text-align: center;
  }
  span {
    color: #FFFFFF;
    font-size: 26px;
  }
  span.green {
    color: #81ce33;
    font-weight: bold;
  }
`;

function Header () {
  return (
    <HeaderWrapper>
      <Container>
        <span>Pop</span>
        <span className='green'>Gifs</span>
        <span>!</span>
      </Container>
    </HeaderWrapper>
  )
}

export default Header;
