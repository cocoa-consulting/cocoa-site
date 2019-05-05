import React from 'react'

import Article, { ArticleConsumerPropTypes } from '../Article'

const SocialIcon = ({ site, url }) => (
  <li>
    <a
      href={url}
      className={`icon fa-${site}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="label">{site}</span>
    </a>
  </li>
)

const socialIcons = [
  { site: 'github', url: 'https://github.com/cocoa-consulting' },
  {
    site: 'linkedin',
    url: 'https://www.linkedin.com/company/cocoa-consulting',
  },
  { site: 'twitter', url: 'https://twitter.com/cocoacons' },
]

const Services = props => (
  <Article id={'contact'} title={'Contact Us'} {...props}>
    <form method="post" action="#">
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4" />
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special" />
        </li>
        <li>
          <input type="reset" value="Reset" />
        </li>
      </ul>
    </form>
    <ul className="icons">
      {socialIcons.map(si => (
        <SocialIcon {...si} />
      ))}
    </ul>
  </Article>
)

Services.propTypes = ArticleConsumerPropTypes

export default Services
