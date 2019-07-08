import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import ImageItem from './ImageItem';
import './../../styles/slick.css';
import './../../styles/slick-theme.css';

const ImageSliderWrapper = styled.div`
  margin-top: 20px;

  .slick-prev:before, .slick-next:before {
    color: #000 !important;
  }
  .image-item-wrapper {
    height: 400px;
  }
  .image-item a {
    margin: 0 10px;
  }
`;

function ImageSlider (props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <ImageSliderWrapper>
      <Slider {...settings}>
        {props.related.data.map(gif => {
          const preview = gif.images.fixed_height_still.url;
          const detail_url = `/detail/${gif.id}`
          return (
            <div key={gif.id} className='image-item-wrapper'>
              <ImageItem
                detailUrl={detail_url}
                preview={preview}
                title={gif.title}
              />
            </div>
          )
        })}
      </Slider>
    </ImageSliderWrapper>
  )
}

export default ImageSlider;
