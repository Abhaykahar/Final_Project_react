import React from 'react'
import Header from '../../Component/Header'
import './contact.css'
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Footer from '../../Component/Footer';









const Contact = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div>
        <Header/>

        <section className='silder-img'>
      <div className="container">
      <div className="row">
          <h2 className='d-none d-sm-none d-md-none d-lg-block'>Contact Us</h2>
      </div>
    </div>
      </section>


      <section className='justo'>
        <div className="container">
          <h2 align="center">Contact Us</h2>
          <p align="center">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum <br /> diam justo sed rebum vero dolor duo.</p>
          <div className="row mt-5 align-items-center">
            <div className="col-lg-5 col-md-6 col-12 mb-3 ">
              <div className="card card-content">
               
              <div className="mb-3 stree">
               <h5>Call Us</h5>
               <span><IoCall /> +012 345 67890</span>

               </div>
               <div className="mb-3 stree">
               <h5>Email Us</h5>
               <span><IoIosMail /> info@example.com</span>

               </div>
               <div className="mb-3 stree">
               <h5>Office Address</h5>
               <span><IoLocationSharp /> 123 Street, New York, USA</span>

               </div>
               <div className="mb-3 stree">
               <h5>Follow Us</h5>
              <div className="d-flex">
              <IoLogoTwitter className=' ic' style={{fontSize:'30px',border:'1px solid white',borderRadius:'50%',padding:'5px'}}/>
              <FaFacebook className='ms-2 ic' style={{fontSize:'30px',border:'1px solid white',borderRadius:'50%',padding:'5px'}}/>
              <FaYoutube className='ms-2 ic' style={{fontSize:'30px',border:'1px solid white',borderRadius:'50%',padding:'5px'}}/>
              <FaLinkedin className='ms-2 ic' style={{fontSize:'30px',border:'1px solid white',borderRadius:'50%',padding:'5px'}}/>
              </div>

               </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <div className="form-content">
              <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.
                <span>Download Now.</span>
              </p>

              <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Your Name' className='mb-4' style={{width:'48%',padding:'10px'}}  />
                <input type="text" placeholder='Your Email' className='ms-2' style={{width:'50%',padding:'10px'}} />
                <input type="text" placeholder='Subject' className='mb-4' style={{width:'100%',padding:'10px'}} />
                <textarea  placeholder='Message' className='mb-4' style={{width:'100%',padding:'10px'}} id=""></textarea>
                <button type='submit' className='btn' style={{backgroundColor:'#3CB815',color:'white',padding:'10px',width:'30%',height:'30%',borderRadius:'20px'}}>Send Message</button>
              </form>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section>
        <div className="conatiner mb-4">
          <div className="row">
            <div className="col-lg-10 mx-auto d-block col-md-6 col-sm-4 over-flow">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4088617009274!2d72.85989507541224!3d21.215629581333754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1abac4421d%3A0xeaf809ece6c2526a!2sHirabag%20Circle%2C%20Hirabaugh%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1721141378278!5m2!1sen!2sin" width={1200} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

            </div>
          </div>
        </div>
      </section>

      <Footer/>


    </div>
  )
}

export default Contact
