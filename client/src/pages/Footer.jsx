import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div
      className="container-fluid bg-light text-dark text-center"
      style={{ bottom: "0", padding: "20px" }}
    >
      <p>Copyright 2022 Rajamangala University of Technology Srivijaya</p>
      {/* hover-underline-animation */}
      <Link to="/login" className="btn btn-outline-dark rounded-pill p-2">
        <i className="fa-solid fa-sign-in text-danger"></i> สำหรับผู้ดูแลระบบ
      </Link>
    </div>
  );
}

export default Footer