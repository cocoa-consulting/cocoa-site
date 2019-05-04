import React from 'react'
import PropTypes from 'prop-types'

import About from './articles/About'
import Services from './articles/Services'
import Team from './articles/Team'
import Contact from './articles/Contact'

class Main extends React.Component {
  render() {
    const articleProps = {
      activeArticle: this.props.article,
      timeout: this.props.articleTimeout,
      onClose: this.props.onCloseArticle,
    }

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <About {...articleProps} />
        <Services {...articleProps} />
        <Team {...articleProps} />
        <Contact {...articleProps} />
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
