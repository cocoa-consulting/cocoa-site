import React from 'react'

import Article, { ArticleConsumerPropTypes } from '../Article'

import pic01 from '../../images/pic01.jpg'

const About = props => (
  <Article id={'about'} title={'About Us'} img={pic01} {...props}>
    <h3>ABOUT US</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
      rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
      conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
      porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc
      ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit
      amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in
      aliquam at, euismod in lectus. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. In non lorem sit
      amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed
      vehicula.
    </p>
  </Article>
)

About.propTypes = ArticleConsumerPropTypes

export default About
