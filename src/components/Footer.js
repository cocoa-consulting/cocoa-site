import React from 'react'
import PropTypes from 'prop-types'

import companyInfo from '../data/company'

const companyText = `
  
`

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; {companyInfo.founded.year} – {}{' '}
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
