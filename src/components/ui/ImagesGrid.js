import React from 'react';
import styled from 'styled-components';

import ImageItem from './ImageItem';

const ImagesGrid = styled.div`
  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    width: 31%;
    height: 380px;
    margin: 1%;
    overflow: hidden;
    background: #f7f7f7;
  }

  @media screen and (max-width: 720px) {
    li {
      height: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    li {
      width: 45%;
      margin: 1%;
    }
  }

  @media screen and (max-width: 480px) {
    li {
      width: 95%;
      height: auto;
      margin: 1%;
    }
  }
`;

export default props => {
  const data = props.data;

  return (
    <ImagesGrid>
      <ul>
        {data.data.map(gif => {
          const preview = gif.images.fixed_height_downsampled.url;
          const detail_url = `/detail/${gif.id}`
          return (
            <li key={gif.id}>
              <ImageItem
                detailUrl={detail_url}
                preview={preview}
                title={gif.title}
              />
            </li>
          )
        })}
      </ul>
    </ImagesGrid>
  )
}
