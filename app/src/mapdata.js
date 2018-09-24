 import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import key from './config.json';
import Geocode from 'react-geocode'
import { log } from 'util';

Geocode.setApiKey(key[0].API_KEY)
// Geocode.enableDebug()

export class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemsFromProps : this.props.items,
      locationArray: [],
      text: 'text'
    }
    this.getLocations = this.getLocations.bind(this)
  }

  componentDidMount(){
    this.getLocations()
    
    
    

  }

  render() {
    console.log(this.state.locationArray);
    
    return(
      <div>
        <Map 
          google={this.props.google} 
          zoom={14}
          visible={true}
          initialCenter={{
            lat: -41.286461,
            lng: 174.776230
          }}
          >
          {/* {this.locationsArray.map((locations, i)=>
            <Marker
              key = {i}
              name={'Name'}
              position={locations}
            />
          )} */}
        </Map>
      </div>
          )
        }
          
        getLocations(){   
          console.log('running');
           
          let locations = [];
          for (let i = 0; i < 10; i++) {
            var el = this.props.items[i];
            
            Geocode.fromAddress(el["0"].address1 + ' Wellington, New Zealand').then(
              response => {
                // console.log(response.results[0].geometry.location.lat);
                // console.log(response.results[0].geometry.location.lng);
                // var lat = response.results[0].geometry.location.lat
                // var lng = response.results[0].geometry.location.lng
                
                var test = response.results[0].geometry.location
                // console.log(this.state.locationArray);
                
                // console.log(test);
                var joined = this.state.locationArray.concat({test})
                // console.log(joined);
                // locations.push(test)
                if (i + 1 === 10){
                  this.setState({
                    locationArray: joined
                  })
                }
              },
              error => {
                console.log(error);
                
              }
                
            )
          }
          
          
          
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      

}

export default GoogleApiWrapper({
  apiKey: (key[0].API_KEY)
})(MapContainer)
