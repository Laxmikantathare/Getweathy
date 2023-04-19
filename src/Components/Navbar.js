import React from 'react';
import "./Style.css";

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg ">
<div className="container-fluid" style={{paddingleft: '50px'}} >
  <a className="navbar-brand"  href="/">{props.name}</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
    </ul>

    {/* <div  className=" my-2 my-lg-0">
      <div className=" mx-5 text-light"id='timer' ></div>
    </div> */}
  </div>
</div>
</nav>
    </>
  )
}





