import React from 'react'
import PropTypes from 'prop-types'

const Article = ({
  id,
  title,
  img,
  children,
  activeArticle,
  timeout,
  onClose,
}) => (
  <article
    id={id}
    className={`${activeArticle === id ? 'active' : ''} ${
      timeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">{title}</h2>
    <div className="main">
      {/* {img && <img src={img} alt="" className="image" />} */}
      {children}
    </div>
    <div className="close" onClick={onClose} />
  </article>
)

export const ArticleConsumerPropTypes = {
  activeArticle: PropTypes.string.isRequired,
  timeout: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

Article.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  children: PropTypes.node.isRequired,
  ...ArticleConsumerPropTypes,
}

export default Article
