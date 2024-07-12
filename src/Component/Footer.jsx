import React from 'react'
import './footer.css'
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 mt-3 mx-auto">
              <div className="foody">
              <a className="navbar-brand">F<span>oo</span>dy</a>
              <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>

              <div className="d-flex">
              <FaTwitter className=' ' style={{border:'1px solid white',padding:'8px',borderRadius:'50%',fontSize:'10px',width:'12%',height:'20%'}} />
              <FaFacebookF className='ms-3 ' style={{border:'1px solid white',padding:'8px',borderRadius:'50%',fontSize:'10px',width:'12%',height:'20%'}} />
              <FaYoutube className='ms-3 ' style={{border:'1px solid white',padding:'8px',borderRadius:'50%',fontSize:'10px',width:'12%',height:'20%'}} />
              <FaLinkedin className='ms-3 ' style={{border:'1px solid white',padding:'8px',borderRadius:'50%',fontSize:'10px',width:'12%',height:'20%'}} />

              </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-3 mx-auto">
              <div className="Address">
                <h3>Address</h3>
              <div className="live">
              <FaLocationDot className='icon' />
              <span className='ms-2'>123 Street, New York, USA</span>
              </div>
              <div className="live">
              <IoCall className='icon' />
              <span className='ms-2'>+012 345 67890</span>
              </div>
              <div className="live">
              <MdEmail className='icon' />
              <span className='ms-2'>info@example.com</span>
              </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-3 mx-auto">
              <div className="Quick">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="#"><IoIosArrowForward /> About us</a>
                  </li>
                  <li>
                    <a href="#"><IoIosArrowForward /> Contact us</a>
                  </li>
                  <li>
                    <a href="#"><IoIosArrowForward /> Our services</a>
                  </li>
                  <li>
                    <a href="#"><IoIosArrowForward /> Terms & Condition</a>
                  </li>
                  <li>
                    <a href="#"><IoIosArrowForward /> Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-3 mx-auto">
               <div className="new">
                <h3>Newsletter</h3>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <input type="text" placeholder='Your email' className='isp' style={{color:'white'}} />
                <input type="button" value="signup" className='sign' />
              </div>
            </div>
          </div>
        </div>
        <div className="borderr mt-2" style={{borderBottom:'1px solid #555555'}}></div>

        <div className="fish mt-4 ms-5">
        <p style={{fontSize:'18px'}}>© Your Site Name , <span className='mt-1' style={{color:'#555555'}}>All Right Reserved.</span></p>
        </div>

      </footer>
    </div>
  )
}

export default Footer
