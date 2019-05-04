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
}) => {
  console.log('FUCK')

  return (
    <article
      id={id}
      className={`${activeArticle === id ? 'active' : ''} ${
        timeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">{title}</h2>
      {img && (
        <span className="image main">
          <img src={img} alt="" />
        </span>
      )}
      {children}
      <div className="close" onClick={onClose} />
    </article>
  )
}

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
