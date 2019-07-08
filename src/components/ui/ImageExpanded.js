import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ImageExpanded = styled.div`
  margin-bottom: 30px;

  .image-header {
    margin-bottom: 20px;
  }
  .image-header h2 {
    display: inline;
    margin-left: 5px;
  }
  .image-header a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
  }
  .image-header a span {
    font-size: 24px;
    position: relative;
    top: -1px;
    color: #5c2674;
  }
  img {
    width: 100%;
  }
`;

export default props => {
  return (
    <ImageExpanded>
      <div className='image-header'>
        <Link to="/">
          <span>≪</span>
        </Link>
        <h2>{props.data.title}</h2>
      </div>
      <img src={props.data.images.downsized.url} alt={props.data.title}/>
    </ImageExpanded>
  )
}
