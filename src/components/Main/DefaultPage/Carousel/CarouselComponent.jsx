import React from 'react';
import { Carousel } from 'antd';
import style from '../style.module.css';
import slide1 from '../../../../assets/slides/1.png';
import slide2 from '../../../../assets/slides/2.png';
import slide3 from '../../../../assets/slides/3.png';
import slide4 from '../../../../assets/slides/4.png';
import slide5 from '../../../../assets/slides/5.png';
import slide6 from '../../../../assets/slides/6.png';
import slide7 from '../../../../assets/slides/7.png';
import slide8 from '../../../../assets/slides/8.PNG';

const CarouselComponent = () => {
  const altFitness = 'fitness';
  return (
    <Carousel autoplay className={style.wrapper}>
      <div>
        <div className={style.contentCarousel}>
          <img
            className={style.carouselImage}
            src={slide1}
            alt={altFitness}
          />
          <img
            className={style.carouselImage}
            src={slide2}
            alt={altFitness}
          />
        </div>
      </div>
      <div>
        <div className={style.contentCarousel}>
          <img
            className={style.carouselImage}
            src={slide3}
            alt={altFitness}
          />
          <img
            className={style.carouselImage}
            src={slide4}
            alt={altFitness}
          />
        </div>
      </div>
      <div>
        <div className={style.contentCarousel}>
          <img
            className={style.carouselImage}
            src={slide5}
            alt={altFitness}
          />
          <img
            className={style.carouselImage}
            src={slide6}
            alt={altFitness}
          />
        </div>
      </div>
      <div>
        <div className={style.contentCarousel}>
          <img
            className={style.carouselImage}
            src={slide7}
            alt={altFitness}
          />
          <img
            className={style.carouselImage}
            src={slide8}
            alt={altFitness}
          />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
