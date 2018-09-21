import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    console.log(this.props.items);
    for (let i = 0; i < this.props.items.length; i++) {
    }
      
      
    
    return (
      <Map 
      google={this.props.google} 
      zoom={14}
      visible={true}
      initialCenter={{
        lat: -41.286461,
        lng: 174.776230
      }}
      >
      {/* {this.props.items.map((place, i) => (
        <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: -41.286461, lng: 174.776230}} />
        ))} */}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDK1LL8OIe3T_SZ6WT3U3mtCSALXXD0xaQ')
})(MapContainer)
