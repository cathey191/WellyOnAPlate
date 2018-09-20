import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        visible
        initialCenter={{
          lat: -41.286461,
          lng: 174.776230
        }}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDK1LL8OIe3T_SZ6WT3U3mtCSALXXD0xaQ'
})(MapContainer)
