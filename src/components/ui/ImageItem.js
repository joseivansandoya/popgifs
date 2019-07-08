import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ImageItem = styled.div`
  width: 100%;
  height: 100%;
  a {
    position: relative;
    display: block;
  }
  a img {
    display: block;
    width: 100%;
    height: 100%;
  }
  a:hover .mask {
    display: none;
  }
  .mask {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .mask p {
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: #FFFFFF;
  }
`;

export default props => {
  return (
    <ImageItem className='image-item'>
      <Link to={props.detailUrl}>
        <img src={props.preview} alt={props.title}/>
        <div className='mask'>
          <p>{props.title}</p>
        </div>
      </Link>
    </ImageItem>
  )
}
