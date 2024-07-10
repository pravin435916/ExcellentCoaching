// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RiMenu3Fill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Col } from 'react-bootstrap';
import { IoMdClose } from "react-icons/io";
const MyNavbar = () => {
  return (
    <nav className={`navbar bg-body-tertiary fixed-top shadow-2xl `}>
      <div className={`container-fluid sm:mx-40 `}>
        <div className='flex items-center '>
          <a className="navbar-brand text-xl font-bold text-blue-600" href="#">EXCELLENT <span className='hidden'>ACADEMY OF SCIENCE</span> </a>
          <FaLocationArrow className='text-blue-600 text-xl sm:text-3xl' />
        </div>
        <div className='flex gap-4 items-center'>
          <div className='flex items-center '>
            <a className="navbar-brand text-blue-600 font-semibold" href="#">Lets Talk</a>
            <span className='text-blue-600 text-3xl' ><FaLongArrowAltRight /></span>
          </div>
          <button className="navbar-toggler p-2 rounded-full bg-black text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className='font-bold' ><RiMenu3Fill /></span>
          </button>
        </div>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <div className='flex items-center text-center'>
              <a className="navbar-brand text-3xl text-center font-bold text-blue-600" href="#">EXCELLENT </a>
              <FaLocationArrow className='text-blue-600 text-3xl' />
            </div>
            <button type="button" className="btn-close p-2 rounded-full hover:bg-black outline border-black hover:text-white" data-bs-dismiss="offcanvas" aria-label="Close"><IoMdClose /></button>
          </div>
          <hr />
          <div className="offcanvas-body transition-all">
            <ul className="navbar-nav justify-content-end flex-grow-1 gap-3 pe-3 text-xl font-bold">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Get in Touch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Reviews</a>
              </li>
              <Col md={3}>
                <ul className="flex gap-4 list-inline footer-links">
                  <li className="list-inline-item text-3xl">
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li className="list-inline-item text-3xl">
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="list-inline-item text-3xl">
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li className="list-inline-item text-3xl">
                    <a href="#">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
              </Col>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
