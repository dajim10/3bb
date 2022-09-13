import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo-ruts-sdg-dark.png'
import './Navbar.css'
// import Search from './Search'

const Navbar = () => {
  

  return (
    <nav className="navbar navbar-expand-lg p-3 m-3 sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} width={300} alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active hover-underline-animation"
                aria-current="page"
                href="#"
              >
                <i className="fa-solid fa-house"></i> หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link hover-underline-animation"
                href="#"
              >
                <i className="fa-solid fa-code text-danger "></i> วาระการพัฒนา
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-underline-animation" >
                <i className="fa-solid fa-flag text-success"></i> กรณีศึกษา
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-underline-animation" >
                <i className="fa-solid fa-gavel"></i> กฎและข้อบังคับ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-underline-animation" >
                <i className="fa-solid fa-print text-warning"></i> รายงานประจำปี
              </a>
            </li>
            <li className="nav-item">
              <Link to="/target" className="nav-link hover-underline-animation" >
                <i className="fa-solid fa-bullseye text-primary"></i> เป้าหมายการพัฒนาที่ยั่งยืน
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/inputcontent" className="nav-link hover-underline-animation" >
                <i className="fa-solid fa-user text-danger"></i> Upload Content
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/test" className="nav-link hover-underline-animation" >
                <i className="fa-solid fa-user text-danger"></i> ทดสอบ
              </Link>
            </li>
          </ul>
          {/* <Search /> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar