import React from 'react'
import PropTypes from 'prop-types'

import companyInfo from '../data/company'

const companyText = `

`

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p>
      <span>
        &copy; {companyInfo.founded.year} – {new Date().getFullYear()}{' '}
        {companyInfo.name}
      </span>
      <span>Company No. {companyInfo.companyNo}</span>
      <span>VAT No. {companyInfo.vatNo}</span>
    </p>
    <p className="company__reg-info">
      {companyInfo.name} {companyInfo.registration}
    </p>
    <p className="company__reg-office">{companyInfo.registeredOffice}</p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
