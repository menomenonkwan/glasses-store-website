import { Accordion } from 'react-bootstrap';
import './About.css';

const AboutAccordion = () => {
  return (
    <Accordion flush>
      <Accordion.Item defaultActiveKey="0" eventKey="0">
        <Accordion.Header>Find Your Perfect Pair</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Vision Tests</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Customer Service</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Returns Policy</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-body py-0 ">
      <div className="container-lg mb-5 pb-5">
        <div className="text-center">
          <h2 className="display-5 pt-5">About Us</h2>
          <p className="lead">What we can do for you</p>
        </div>

        <div className="row my-5 g-2 justify-content-around align-items-center">
          <div className="col-10 col-lg-6">
            <AboutAccordion />
          </div>

          <div className="col-6 col-lg-3 d-none d-lg-block">
            <div class="box-scene mx-auto">
              <div class="box">
                <div class="box__face box__face--front"><img className="img-fluid " src="https://source.unsplash.com/LHaqQkG_mgQ/" alt="" /></div>
                <div class="box__face box__face--left"><img className="img-fluid h-100" src="https://source.unsplash.com/KP4bxnxAilU/" alt="" /></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

