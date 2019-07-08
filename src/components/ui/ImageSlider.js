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
  .slick-prev {
    left: 2px !important;
  }
  .slick-next {
    right: 2px !important;
  }
  .slick-slider {
    padding: 0 40px;
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
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
