// components/VendorCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';

import vendor1 from '../../assets/img/vendor-1.jpg';
import vendor2 from '../../assets/img/vendor-2.jpg';
import vendor3 from '../../assets/img/vendor-3.jpg';
import vendor4 from '../../assets/img/vendor-4.jpg';
import vendor5 from '../../assets/img/vendor-5.jpg';
import vendor6 from '../../assets/img/vendor-6.jpg';
import vendor7 from '../../assets/img/vendor-7.jpg';
import vendor8 from '../../assets/img/vendor-8.jpg';

// Use the actual image imports
const vendorImages = [
  vendor1,
  vendor2,
  vendor3,
  vendor4,
  vendor5,
  vendor6,
  vendor7,
  vendor8,
];

const VendorCarousel = () => {
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
                992: { slidesPerView: 5 },
                1200: { slidesPerView: 6 },
              }}
            >
              {vendorImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-light p-3 text-center">
                    <img src={img} alt={`Vendor ${index + 1}`} className="img-fluid" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
    </div>
  );
};

export default VendorCarousel;
