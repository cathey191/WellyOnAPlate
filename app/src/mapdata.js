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
    this.onMapClicked = this.onMapClicked.bind(this)
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
              description={marker.description}
              position={{ lat: marker.lat, lng: marker.lng }}
              />
              ))}
              <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div className='infoBox'>
                <h1>{this.state.selectedPlace.name}</h1>
                <p>{this.state.selectedPlace.description}</p>
              </div>
              </InfoWindow>
            </Map>
        </div>
      )
    }
  }

  onMarkerClick(props, marker, e){
    console.log(e);
    console.log(props);
    console.log(marker);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
    
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  getLocations () {
    var locations = []
    var count = 0
    for (let i = 0; i < 5; i++) {
      var el = this.props.items
      


      Geocode.fromAddress(el[i]['0'].address1 + ' Wellington, New Zealand').then(
        response => {
          count++
          var lat = response.results[0].geometry.location.lat
          var lng = response.results[0].geometry.location.lng
          // console.log(el);
          console.log(i);
          console.log(el[i]);
          
                    

          locations.push({
            title: el[i][0].company,
            address: el[i][0].address,
            suburb: el[i][0].suburb,
            description: el[i][1][0].description,
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
