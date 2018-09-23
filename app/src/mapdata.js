import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import key from './config.json';
import Geocode from 'react-geocode'

Geocode.setApiKey(key[0].API_KEY)
// Geocode.enableDebug()

export class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }



  render() {
    var locations = [];
    for (let i = 0; i < this.props.items.length; i++) {
      const el = this.props.items[i];
      Geocode.fromAddress(el["0"].address1).then(
        response => {
          const {lat, lng} = response.results[0].geometry.location
          pushToArray(lat, lng)
        },
        error => {
          // console.log(error);
          
        }
          
      )
    }
    console.log(locations);
    

    function pushToArray(lat, lng){
      locations.push(lat, lng)
    }
      
    

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
      {/* {this.props.items.map((item, i) => (
        <Marker
        title={item["0"]["0"].company}
        name={item["0"]["0"].company}
        position={{lat: -41.286461, lng: 174.776230}} />
        ))} */}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (key[0].API_KEY)
})(MapContainer)
