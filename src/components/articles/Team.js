import React from 'react'

import Article, { ArticleConsumerPropTypes } from '../Article'

import pic02 from '../../images/pic02.jpg'

const Team = props => (
  <Article id={'team'} title={'Meet the Team'} img={pic02} {...props}>
    <ul>
      <li>
        <h3>Charles Oliver – Director & Developer </h3>
        <p>
          Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
          dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus.
        </p>
      </li>
      <li>
        <h3>Edward Parkes – Hardware & Networking Expert</h3>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. In non lorem sit amet elit placerat maximus.
          Pellentesque aliquam maximus risus, vel sed vehicula.
        </p>
      </li>
    </ul>
  </Article>
)

Team.propTypes = ArticleConsumerPropTypes

export default Team
