import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './../../slick.css';

const ImageSliderWrapper = styled.div`
  
`;

function ImageSlider (props) {
  return (
    <ImageSliderWrapper>
      <Slider>
        {props.related.data.map(gif => {
          const preview = gif.images.fixed_height_still.url;
          const detail_url = `/detail/${gif.id}`
          return (
            <div>
              <Link to={detail_url}>
                <img src={preview} alt={gif.title}/>
              </Link>
            </div>
          )
        })}
      </Slider>
    </ImageSliderWrapper>
  )
}

export default ImageSlider;
