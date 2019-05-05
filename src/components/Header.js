import React from 'react'
import PropTypes from 'prop-types'

import companyInfo from '../data/company'
import logo from '../assets/cocoa-cube--white.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={logo} alt="cocoa consulting" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>{companyInfo.name.standard}</h1>
        <p>
          We are a small development & IT consultancy, based in Lancashire and
          Worcester.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('services')
            }}
          >
            Our Services
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('team')
            }}
          >
            The Team
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
