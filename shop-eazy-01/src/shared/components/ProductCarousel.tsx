import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

import { Autoplay, FreeMode } from 'swiper/modules';
import products from '../../core/config/products';
import Product from '../../shared/components/product';

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
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                    <Product {...product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
