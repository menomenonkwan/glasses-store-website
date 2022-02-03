import { Carousel } from 'react-bootstrap';
import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';

import './Reviews.css';

const ReviewCard = () => {
  return (
    <div className="py-3">
      <p className="text-start fs-5 fw-lighter px-5">{faker.lorem.sentence()}</p>
      <h4 className="text-start fw-bold fs-4 fst-italic px-5 ms-4">{faker.name.findName()} - <span className="lead">{faker.address.city()}, {faker.address.country()}</span></h4>
    </div>
  );
}

export default function Reviews() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      "https://source.unsplash.com/random/700x400?sig=" + Math.floor(Math.random() * 100),
      "https://source.unsplash.com/random/700x400?sig=" + Math.floor(Math.random() * 100),
      "https://source.unsplash.com/random/700x400?sig=" + Math.floor(Math.random() * 100),
    ])
    // setImages([
    //   "https://source.unsplash.com/collection/1121888/700x400?sig=" + Math.floor(Math.random() * 100),
    //   "https://source.unsplash.com/collection/1121888/700x400?sig=" + Math.floor(Math.random() * 100),
    //   "https://source.unsplash.com/collection/1121888/700x400?sig=" + Math.floor(Math.random() * 100),
    // ])
  }, []);
  
  return (
    <section id="reviews" className="bg-black pt-5">
      <h2 className="text-center display-5 text-white mb-5">Reviews</h2>
      <div className="container-md">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block m-auto"
              src={images[0]}
              alt="First slide"
              />
            <Carousel.Caption className="py-3 m-auto">
              <ReviewCard />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block m-auto"
              src={images[1]}
              alt="First slide"
              />
            <Carousel.Caption className="py-3 m-auto">
              <ReviewCard />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-50 m-auto"
              src={images[2]}
              alt="First slide"
              />
            <Carousel.Caption className="py-3 m-auto">
              <ReviewCard />
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
    
      </div>
    </section>
  );
}
