import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

import { Autoplay, FreeMode } from 'swiper/modules';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSyncAlt, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

 import product1 from '../../../assets/img/product-1.jpg';
 import product2 from '../../../assets/img/product-2.jpg';
 import product3 from '../../../assets/img/product-3.jpg';
 import product4 from '../../../assets/img/product-4.jpg';
 import product5 from '../../../assets/img/product-5.jpg';
 import product6 from '../../../assets/img/product-6.jpg';
 import product7 from '../../../assets/img/product-7.jpg';
 import product8 from '../../../assets/img/product-8.jpg';

// Use the actual image imports
const productImages = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
];

const ProductCarousel = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col">
            <Swiper
              modules={[Autoplay, FreeMode]}
              spaceBetween={20}
              slidesPerView={6}
              freeMode={true}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 2 },
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                992: { slidesPerView: 4 },
                1200: { slidesPerView: 4 },
              }}
            >
              {productImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img src={img} alt={`product ${index + 1}`} className="img-fluid" />
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
