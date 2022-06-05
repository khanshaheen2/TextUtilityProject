import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
export default function NavBar(props) {
  console.log(props.navtextcolor);
  return (
    
    <nav className={`navbar navbar-expand-lg`} style={{ backgroundColor:props.mode, color:props.navtextcolor}}>
        <Link className="navbar-brand" to="/" style={{color:props.navtextcolor}}>{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/" style={{color:props.navtextcolor}}>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About"style={{color:props.navtextcolor}}>{props.aboutText}</Link>
            </li>
           
          </ul>
          <button  style={{height: "40px",width: "70px",borderRadius:'10px',background:"linear-gradient(to bottom, #143d59 0%, #143d59 50%, #f4b41a 50%, #f4b41a 100%"}} onClick={props.pallate1}></button>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}

<div className={`form-check form-switch text-${props.navtextcolor} mx-3`}>
  <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
</div>
        </div>
      </nav>
  )
}
NavBar.propTypes ={
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
NavBar.defaultProps = {
    title: "QatarShop",
    aboutText: "about"
}