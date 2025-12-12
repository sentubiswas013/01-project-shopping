import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

import carousel1 from '../../../assets/img/carousel-1.jpg';
import carousel2 from '../../../assets/img/carousel-2.jpg';
import carousel3 from '../../../assets/img/carousel-3.jpg';
import offer1 from '../../../assets/img/offer-1.jpg';
import offer2 from '../../../assets/img/offer-2.jpg';

const slides = [
  {
    image: carousel1,
    title: 'Men Fashion',
    text: 'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
  },
  {
    image: carousel2,
    title: 'Women Fashion',
    text: 'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
  },
  {
    image: carousel3,
    title: 'Kids Fashion',
    text: 'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
  },
];

const HeaderCarousel = () => {
  return (
    <div className="container-fluid mb-3">
      <div className="row px-xl-5">
        <div className="col-lg-8">
          <Swiper
            modules={[Autoplay, EffectFade, Mousewheel, Pagination]}
            effect="fade"
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
           pagination={{
            clickable: true,
            }}
            className="mb-30"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="position-relative" style={{ height: 430 }}>
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="position-absolute w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 700 }}>
                      <h1 className="display-4 text-white mb-3">{slide.title}</h1>
                      <p className="mx-md-5 px-5">{slide.text}</p>
                      <a className="btn btn-outline-light py-2 px-4 mt-3" href="#">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="col-lg-4">
          {[offer1, offer2].map((offerImg, index) => (
            <div className="product-offer mb-3" style={{ height: 200 }} key={index}>
              <img className="img-fluid" src={offerImg} alt={`Offer ${index + 1}`} />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="#" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
