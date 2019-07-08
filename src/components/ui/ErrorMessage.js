import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
  text-align: center;
  margin: 100px 0;

  p {
    font-size: 12px;
  }
  .message {
    color: #ba0000;
    font-size: 26px !important;
    font-weight: bold;
  }
`;

function ErrorMessage (props) {
  return (
    <Error>
      <p className='message'>{props.message}</p>
      <p>We're sorry for the inconveniences <span role='img' aria-label='sorry'>🙈</span></p>
    </Error>
  )
}

export default ErrorMessage;
