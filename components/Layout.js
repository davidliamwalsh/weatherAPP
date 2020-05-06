import { Component } from 'react'

import '../scss/application.scss'

class Layout extends Component {
  render () {
    return <>
      { this.props.children }
    </>
  }
}

export default Layout