import React, { Component } from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react';
import Woapdata from './data.js'

export class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    
    return (
      <Map google={this.props.google} zoom={14} visible={true} />
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDK1LL8OIe3T_SZ6WT3U3mtCSALXXD0xaQ')
})(MapContainer)
