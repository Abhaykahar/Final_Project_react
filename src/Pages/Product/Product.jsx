import React, { useState } from 'react'
import Header from '../../Component/Header'
import { IoEyeSharp, IoBagAdd } from "react-icons/io5";
import Footer from '../../Component/Footer';


const Product = () => {

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
    <div>
      <Header/>


      <section className='silder-img'>
      <div className="container">
      <div className="row">
          <h2 className='d-none d-sm-none d-md-none d-lg-block'>Product</h2>
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


      <Footer/>



    </div>
  )
}

export default Product
