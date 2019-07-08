import React from 'react';
import Container from './Container';
import Header from './Header';

function Layout (props) {
  return (
    <>
      <Header />
      <Container>
        {props.children}
      </Container>
    </>
  )
}

export default Layout;
