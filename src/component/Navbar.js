import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.modeN} bg-${props.modeN} `}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-success" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch mx-2" text-${props.mode==='light'?'dark':'light'}`} >
        <input className="form-check-input mx-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changer_Prop}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='light'?'Dark':'Light'}Mode`}</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes={
  title:PropTypes.string,
  home:PropTypes.string
}
