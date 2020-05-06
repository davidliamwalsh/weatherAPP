import { Component } from 'react'

import Layout from '../components/Layout'

class Index extends Component {

  state = {
    coords: {
      latitude: 45,
      longitude: 60
    }
  }

  // get device location
  componentDidMount() {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        this.setState({
          coords: newCoords
        })
      })
    }
  }

  render () {
    return <Layout>
      <p></p>
    </Layout>
  }
}

export default Index