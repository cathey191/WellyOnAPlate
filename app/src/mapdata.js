import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import key from './config.json'
import Geocode from 'react-geocode'

Geocode.setApiKey(key[0].API_KEY)
// Geocode.enableDebug()

export class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemsFromProps: this.props.items,
      locationArray: [],
      text: 'text',
      isLoaded: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    this.getLocations = this.getLocations.bind(this)
    this.onMarkerClick = this.onMarkerClick.bind(this)
  }

  componentDidMount () {
    this.getLocations()
    
  }
  
  componentDidUpdate(){
    
  }
  
  render () {
    console.log(this.state.locationArray);
    const { isLoaded, locationArray } = this.state
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <Map
            google={this.props.google}
            zoom={14}
            visible
            initialCenter={{
              lat: -41.286461,
              lng: 174.776230
            }}
          >
            {locationArray.map((marker, i) => (
              <Marker
              key={i}
              onClick={this.onMarkerClick}
                name={marker.title}
                position={{ lat: marker.lat, lng: marker.lng }}
              />
            ))}
          </Map>
        </div>
      )
    }
  }
  onMarkerClick(props, marker, e){
    console.log(e);
    console.log(props);
    console.log(marker);
    
  }

  getLocations () {
    var locations = []
    var count = 0
    for (let i = 0; i < 5; i++) {
      var el = this.props.items[i]
      // console.log(el);

      Geocode.fromAddress(el['0'].address1 + ' Wellington, New Zealand').then(
        response => {
          count++
          var lat = response.results[0].geometry.location.lat
          var lng = response.results[0].geometry.location.lng

          locations.push({
            title: el[0].company,
            address: el[0].address1,
            suburb: el[0].suburb,
            lat: lat,
            lng: lng
          })

          if (count === 5) {
            this.setState({
              locationArray: locations,
              isLoaded: true
            })
          }
        },
        error => {
          console.log(error)
        }
      )
    }
  }
}

export default GoogleApiWrapper({
  apiKey: key[0].API_KEY
})(MapContainer)
