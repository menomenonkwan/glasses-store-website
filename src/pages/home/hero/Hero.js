import ReactPlayer from "react-player";
import heroVideo from '../../../assets/glasses.mp4';

// styles
import './Hero.css';

export default function Video() {
  return (
    <div fluid className=".container-fluid hero" >

      <ReactPlayer 
        url={heroVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
        playbackRate={0.95}
      />
      <div className="container-fluid hero-overlay">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-md-8 text-center text-md-start">
            <h1 className="display-1 text-light mb-0">Summer <span class="text-info">Sale</span> 2022</h1>
            <h1 className="display-6 text-light mb-3">Up to 50% all styles!</h1>
            <div>
              <a href="#home" class="btn btn-outline-info btn-lg mt-3 shadow-sm">
                Buy Now
              </a>
              <a href="#home" class="btn btn-info btn-lg mt-3 ms-3 shadow-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}