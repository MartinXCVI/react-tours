import { useState, useEffect } from "react";

import { GiSailboat } from "react-icons/gi";
import { Link } from 'react-router-dom'
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

import './Navbar.css'
import Button from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  
  const handleClick = ()=> setClick(!click)
  const closeNavMenu =()=> setClick(false)

  const showButton = ()=> {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(()=> {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeNavMenu}>
            Tours <GiSailboat className="company-icon" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes className="menu-icon-svg" /> : <FaBars className="menu-icon-svg" />}
          </div>
          <ul className={click ?'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeNavMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/destinations" className="nav-links" onClick={closeNavMenu}>
                Destinations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeNavMenu}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeNavMenu}>
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn-outline'>Sign up</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar