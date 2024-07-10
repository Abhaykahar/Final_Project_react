import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import './header.css'

function Header() {
  return (
    <div>
         <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div class="col-lg-6 px-5 text-start">
                <small><FaLocationDot /> 123 Street, New York, USA</small>
                <small class="ms-4"><IoMail /> info@example.com</small>
            </div>
            <div class="col-lg-6 px-5 text-end">
                <small>Follow us:</small>
                <span class="text-body ms-3"><FaFacebookF /></span>
                <span class="text-body ms-3"><FaTwitter /></span>
                <span class="text-body ms-3"><FaLinkedin /></span>
                <span class="text-body ms-3"><IoLogoInstagram /></span>
            </div>
        </div>
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand">F<span>oo</span>dy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon d-flex-justify-content-end" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
        <li className="nav-item">
          <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link active" aria-current="page">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/product" className="nav-link active" aria-current="page">Product</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link active" aria-current="page">Cart</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active" aria-current="page">Contact</Link>
        </li>
      </ul>
    </div>
    <div className="icon d-none d-sm-none d-md-none d-lg-block">
    <span><FaSearch /></span>
    <span><FaUser /></span>
    <span><FaBagShopping /></span>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header
