import ReactPlayer from "react-player";
import heroVideo from '../../../assets/glasses.mp4';

// styles
import './Hero.css';

export default function Video() {
  return (
    <div className=".container-fluid hero">
{/* Video by cottonbro from Pexels */}
      <ReactPlayer 
        url={heroVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
        playbackRate={0.95}
      />

      {/* OVERLAY */}
      <div className="container-fluid hero-overlay">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-8 text-center text-md-start">
            <h1 className="display-1 text-light mb-0">Summer <span className="text-info">Sale</span> 2022</h1>
            <h1 className="display-6 text-light mb-3">Up to 50% all styles!</h1>

            <div>
              <a href="#shop" className="btn btn-outline-info btn-lg mt-3 shadow-sm">
                Buy Now
              </a>
              <a href="#about" className="btn btn-info btn-lg mt-3 ms-3 shadow-sm">
                Learn More
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}