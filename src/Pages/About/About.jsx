import React from 'react'
import Header from '../../Component/Header'
import './about.css'
import { MdOutlineArrowRight } from "react-icons/md";
import Footer from '../../Component/Footer';


const About = () => {
  return (
    <div>
    <Header/>
      <section className='silder-img'>
      <div className="container">
      <div className="row">
          <h2 className='d-none d-sm-none d-md-none d-lg-block'>About Us</h2>
      </div>
    </div>
      </section>


      <section className="best" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="row align-items-center d-flex">
            <div className="col-12 col-lg-6">
              <img src="img/about.jpg" className="w-100" alt="" />
            </div>
            <div className="col-12 col-lg-6">
              <div className="best-content">
                <h2>Best Organic Fruits And Vegetables</h2>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              </div>
              <span><MdOutlineArrowRight style={{ color: 'green', fontSize: '35px' }} /> Tempor erat elitr rebum at clita</span>
              <span><MdOutlineArrowRight style={{ color: 'green', fontSize: '35px' }} /> Aliqu diam amet diam et eos</span>
              <span><MdOutlineArrowRight style={{ color: 'green', fontSize: '35px' }} /> Clita duo justo magna dolore erat amet</span>
              <button className="btn btn-success mt-4 rounded-pill p-2 w-25">Read More</button>
            </div>
          </div>
        </div>
      </section>


      <section className="visit">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto    col-12">
              <h2>Visit Our Firm</h2>
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
            </div>
            <div className="col-lg-4 d-none d-sm-none  d-md-none d-lg-block text-end">
                  <button className="btn visit-btn">Visit Now</button>
              </div>

          </div>
        </div>
      </section>

      <section className="our">
        <div className="container">
          <div className="row">
            <h3>Our Features</h3>
            <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam <br />justo sed rebum vero dolor duo.</p>
          </div>
          <div className="row col-lg-12 mb-3">
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div className="Natural">
                <img src="img/icon-1.png" className="mx-auto d-block" alt="" />
                <h4>Natural Process</h4>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                <button>Read More</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div className="Natural">
                <img src="img/icon-2.png" className="mx-auto d-block" alt="" />
                <h4>Organic Products</h4>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                <button>Read More</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div className="Natural">
                <img src="img/icon-3.png" className="mx-auto d-block" alt="" />
                <h4>Biologically Safe</h4>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer/>
    </div>
  )
}

export default About
