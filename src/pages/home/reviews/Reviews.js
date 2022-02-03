import { Carousel } from 'react-bootstrap';
import { ReviewCard, reviewerImages } from '../../../assets/textContent';

export default function Reviews() {
  
  return (
    <section id="reviews" className="bg-black py-5">
      <h2 className="text-center display-5 text-white mb-5">Reviews</h2>
      <div className="container-md">

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block m-auto"
              src={reviewerImages[0]}
              alt="First slide"
              />
            <Carousel.Caption className="py-3 m-auto">
              <ReviewCard />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block m-auto"
              src={reviewerImages[1]}
              alt="First slide"
              />
            <Carousel.Caption className="py-3 m-auto">
              <ReviewCard />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block m-auto"
              src={reviewerImages[2]}
              alt="First slide"
              />
            <Carousel.Caption className="py-3 m-auto">
              <ReviewCard />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block m-auto"
              src={reviewerImages[3]}
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
