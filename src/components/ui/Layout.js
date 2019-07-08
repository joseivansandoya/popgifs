import React from 'react';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';

function Layout (props) {
  return (
    <>
      <Header />
      <Container>
        {props.children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout;
