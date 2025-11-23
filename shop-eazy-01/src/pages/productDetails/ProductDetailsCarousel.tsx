import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
 
import product1 from '../../assets/img/product-1.jpg';
import product2 from '../../assets/img/product-2.jpg';
import product3 from '../../assets/img/product-3.jpg';
import product4 from '../../assets/img/product-4.jpg';

export function ProductDetailsCarousel({ title }: { title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [product1, product2, product3, product4];

  return (
    <div>
      <style>
        {`
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            filter: invert(1);
          }
        `}
      </style>
      <Carousel className="bg-light" activeIndex={activeIndex} onSelect={setActiveIndex}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Product ${index + 1}`} style={{ height: '400px', objectFit: 'cover' }} />
          </Carousel.Item>
        ))}
      </Carousel>
      
      <div className="d-flex mt-3 gap-2" style={{ overflowX: 'auto', justifyContent: images.length <= 5 ? 'center' : 'flex-start', padding: '0 10px' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`border ${activeIndex === index ? 'border-primary border-3' : 'border-secondary'}`}
            style={{ width: '80px', height: '80px', objectFit: 'cover', cursor: 'pointer', flexShrink: 0 }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductDetailsCarousel;
