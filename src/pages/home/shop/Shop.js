import { shopOptions } from '../../../assets/textContent';
import './Shop.css';

export default function Shop() {
  return (
    <section id="shop" className="bg-light py-5">
      <h2 className="text-center display-5 pt-5">Find What Fits You</h2>
      <div className="container-md my-5">
        <div className="row gx-3 gy-4 align-items-center justify-content-center">

          {shopOptions.map(item => (
            <div className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-4" key={item.id}>
              <div className="card border-0 bg-light" key={item.id}>
                <div className="card-body">
                  <div className="hovereffect">
                    <img className="img-responsive img-fluid shadow-sm" src={item.image} alt="" />
                    <div className="overlay">
                      <h2 className='display-6'>{item.title}</h2>
                      <a className="info" href={item.link}>View More</a>
                    </div>
                  </div>

                  <h3 className="card-title mt-2 fw-light">{item.title}</h3>
                  <a href={item.link} className='btn btn-outline-none p-0 fw-bold text-primary btn-lg mt-3'>Shop Now <i className="bi bi-chevron-right"></i></a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
  
}
