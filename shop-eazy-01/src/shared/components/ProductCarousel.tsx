import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

import { Autoplay, FreeMode } from 'swiper/modules';
import Product from '../../shared/components/Product';
import { productService } from '../../core/services/productService';
import type { ProductProps } from '../../core/services/model';

const ProductCarousel = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const data = await productService.getProducts("12321");
          console.log('Fetched products data:', data);
          setProducts(data);
          setLoading(false);
          console.log('Products fetched:', data);
        } catch (error) {
          setLoading(false)
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);

  if (loading) return <div>Loading...</div>;

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
                    <Product data={product}/>
                  </SwiperSlide>
                ))}
            </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
