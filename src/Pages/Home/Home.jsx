import React, { useState } from 'react';
import Header from '../../Component/Header';
import './home.css';
import { MdOutlineArrowRight } from "react-icons/md";
import { IoEyeSharp, IoBagAdd } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

import Footer from '../../Component/Footer';


const Home = () => {
  const initialProducts = [
    {
      id: 1,
      title: 'Fresh Tomato',
      price: '$19.00',
      image: 'https://themewagon.github.io/foody2/img/product-1.jpg',
      category: 'Vegetable',
    },
    {
      id: 2,
      title: 'Fresh Apple',
      price: '$19.00',
      image: 'https://themewagon.github.io/foody2/img/product-2.jpg',
      category: 'Fruits',
    },
    {
      id: 3,
      title: 'Mirchi',
      price: '$19.00',
      image: 'https://themewagon.github.io/foody2/img/product-3.jpg',
      category: 'Vegetable',
    },
    {
      id: 4,
      title: 'Stoberi',
      price: '$19.00',
      image: 'https://themewagon.github.io/foody2/img/product-4.jpg',
      category: 'Fruits',
    },
    {
      id: 5,
      title: 'Kakdi',
      price: '$19.00',
      image: 'https://themewagon.github.io/foody2/img/product-5.jpg',
      category: 'Vegetable',
    },
    {
      id: 6,
      title: 'Fresh Tometo',
      price: '$19.00',
      image: 'https://themewagon.github.io/foody2/img/product-6.jpg',
      category: 'Vegetable',
    },
    {
      id: 7,
      title: 'Pateto',
      price: '$19.00',
      image: 'https://themewagon.github.io/foody2/img/product-7.jpg',
      category: 'Vegetable',
    },
    {
      id: 8,
      title: 'Banana',
      price: '$19.00',
      image: 'https://themewagon.github.io/foody2/img/product-8.jpg',
      category: 'Fruits',
    },
  ];

  const [items, setItems] = useState(initialProducts);

  const filterData = (cat) => {
    if (cat === "All") {
      setItems(initialProducts);
    } else {
      const filteredItems = initialProducts.filter((product) => product.category === cat);
      setItems(filteredItems);
    }
  }

  const categories = [
    {
      id: 1,
      category: 'Vegetable'
    },
    {
      id: 2,
      category: 'Fruits'
    },
    {
      id: 3,
      category: 'Fresh'
    },
  ];

  return (
    <>
      <Header />
      <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active d-flex">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7 d-none d-sm-none d-md-none d-lg-block">
                      <h1 className="display-3 mb-5 animated slideInDown text-dark fw-bold">Organic Food Is Good For Health</h1>
                      <a href="#" className="btn btn-success rounded-pill py-sm-3 px-sm-5">Products</a>
                      <a href="#" className="btn btn-danger rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100 " src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7 d-none d-sm-none d-md-none d-lg-block">
                      <h1 className="display-3 mb-5 animated slideInDown text-dark fw-bold">Natural Food Is Always Healthy</h1>
                      <a href="#" className="btn btn-success rounded-pill py-sm-3 px-sm-5">Products</a>
                      <a href="#" className="btn btn-danger rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

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

      <section className="products">
        <div className="container">
          <div className="row align-items-center d-flex">
            <div className="col-lg-7 col-12">
              <h2>Our Products</h2>
              <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="col-lg-5 col-12">
              <div className="d-flex justify-content-end">
                <button className='btn' onClick={() => filterData("All")}>All</button>
                {
                  categories.map((val, index) => (
                    <button className="ms-2 btn" onClick={() => filterData(val.category)} key={index}>{val.category}</button>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="row">
            {
              items.map((val) => (
                <div className="col-lg-3 col-md-6 col-12 mt-4 mx-auto" key={val.id}>
                  <div className="card mx-auto d-block" style={{ width: '20rem' }}>
                    <img src={val.image} className="card-img-top" alt={val.title} />
                    <div className="card-body">
                      <h5 className="card-title pt-2 pb-2" style={{ textAlign: "center" }}>{val.title}</h5>
                      <p className="card-text text-success" style={{ textAlign: "center", fontSize: '20px' }}>{val.price}  <span className="ms-2 text-decoration-line-through text-dark">$29.00</span></p>
                      <div className="d-flex align-items-center mt-4">
                        <div className="view d-flex align-items-center">
                          <IoEyeSharp className="ms-2 icon-1 text-success" />
                          <span className="ms-2">View Details</span>
                        </div>
                        <div className="cart d-flex align-items-center ms-auto">
                          <IoBagAdd className="icon text-success" />
                          <span className="ms-2">Add to Cart</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <button className="btn brow mx-auto d-block mt-5 py-2">Browser More Products</button>
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

      

      <section className="Customer">
        <div className="container">
          <div className="row ">
            <h2 className="" align="center">Customer Review</h2>
            <p align="center">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <div className="row  mt-5">
            <div className="col-lg-4 col-md-6 col-12 mt-4">
              <div className="Customer-content  p-4 bg-light">
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>

                <div className="d-flex align-items-center">
                  <img src="/img/testimonial-1.jpg" alt="" />
                  <div className="ms-3">
                    <h5>Clinet Name</h5>
                    <span>Profession</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
              <div className="Customer-content   p-4" style={{backgroundColor:'#3cb815',color:'white'}}>
                <p className='text-light'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>

                <div className="d-flex align-items-center">
                  <img src="/img/testimonial-2.jpg" alt="" />
                  <div className="ms-3">
                    <h5>Clinet Name</h5>
                    <span>Profession</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
              <div className="Customer-content  p-4 bg-light">
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>

                <div className="d-flex align-items-center">
                  <img src="/img/testimonial-3.jpg" alt="" />
                  <div className="ms-3">
                    <h5>Clinet Name</h5>
                    <span>Profession</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='Latest'>
        <div className="container">
          <div className="row">
            <h2 align="center">Latest Blog</h2>
            <p align="center">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-12 mt-4">
              <div className="Latest-content pb-3">
                <img src="img/blog-1.jpg" className='w-100' alt="" />
                <p>How to cultivate organic fruits and vegetables in own firm</p>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon d-flex align-items-center me-4 px-3">
                  <FaUserAlt className='me-2' style={{color:'#3CB815'}} />
                    <span>Admin</span>
                  </div>
                  <div className="date  d-flex align-items-center">
                  <MdDateRange  className='me-1' style={{color:'#3CB815',fontSize:'22px'}} />
                  <span>01 Jan, 2045</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
              <div className="Latest-content pb-3">
                <img src="img/blog-2.jpg" className='w-100' alt="" />
                <p>How to cultivate organic fruits and vegetables in own firm</p>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon d-flex align-items-center me-4 px-3">
                  <FaUserAlt className='me-2' style={{color:'#3CB815'}} />
                    <span>Admin</span>
                  </div>
                  <div className="date  d-flex align-items-center">
                  <MdDateRange  className='me-1' style={{color:'#3CB815',fontSize:'22px'}} />
                  <span>01 Jan, 2045</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mt-4">
              <div className="Latest-content pb-3">
                <img src="img/blog-3.jpg" className='w-100' alt="" />
                <p>How to cultivate organic fruits and vegetables in own firm</p>
                <div className="d-flex align-items-center mt-4">
                  <div className="icon d-flex align-items-center me-4 px-3">
                  <FaUserAlt className='me-2' style={{color:'#3CB815'}} />
                    <span>Admin</span>
                  </div>
                  <div className="date  d-flex align-items-center">
                  <MdDateRange  className='me-1' style={{color:'#3CB815',fontSize:'22px'}} />
                  <span>01 Jan, 2045</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


          <Footer/>
    </>
  );
};

export default Home;
