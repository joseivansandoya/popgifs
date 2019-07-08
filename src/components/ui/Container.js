import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default props => <Container className='container'>{props.children}</Container>
