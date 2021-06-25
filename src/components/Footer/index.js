import React from "react"
import { Link } from "gatsby"
import Logo from "../../assets/img/logo.png"

const Footer = ({ location }) => {
  return (
    <div className="footer">
      <div className="footer-1">
        <div>
          <div className="sec-1  footer-spacing">
            <div className="text-center">
              <img src={Logo} alt="logo" className="logo-footer" />
            </div>
          </div>
        </div>
        <div className="sec-2 footer-spacing">
          <div>
            <ul className="list-menu">
              <li>
                <Link to="/" activeClassName="activeLink-footer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" activeClassName="activeLink-footer">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/services" activeClassName="activeLink-footer">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" activeClassName="activeLink-footer">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about-us" activeClassName="activeLink-footer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" activeClassName="activeLink-footer">
                  Contant Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sec-3 footer-spacing">
          <div className="text-center">
            <div className="media">
              <a>
                <i className="fa fa-facebook-f"></i>
              </a>
              <a>
                <i className="fa fa-twitter"></i>
              </a>
              <a>
                <i className="fa fa-linkedin"></i>
              </a>
              <a>
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2 ">
        <div className='text text-center'>
          <p>Copyright 2021 - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
