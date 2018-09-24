import React, { Component } from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import key from './config.json'
import Geocode from 'react-geocode'

Geocode.setApiKey(key[0].API_KEY)

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

  componentWillMount () {
    this.getLocations()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentState !== this.state.current) {
      this.getLocations()
      this.setState({
        current: nextProps.currentState
      })
    }
  }

  render () {
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
              address={marker.address}
              hours={marker.hours}
              suburb={marker.suburb}
              position={{ lat: marker.lat, lng: marker.lng }}
              />
              ))}
              <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div className='infoBox'>
                <h1>{this.state.selectedPlace.name}</h1>
                <h2 className='item-name green-text' id='sizing'>{this.state.selectedPlace.hours}</h2>
                <p className='item-address'>{this.state.selectedPlace.address}</p>
                <p className='item-address'>{this.state.selectedPlace.suburb}</p>
              </div>
              </InfoWindow>
            </Map>
        </div>
      )
    }
  }

  onMarkerClick(props, marker, e){
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
    for (let i = 0; i < this.props.items.length; i++) {
      var el = this.props.items

      Geocode.fromAddress(el[i][0].address1 + ' Wellington, New Zealand').then(
        response => {
          count++
          var lat = response.results[0].geometry.location.lat
          var lng = response.results[0].geometry.location.lng

          locations.push({
            title: el[i][0].company,
            address: el[i][0].address1,
            hours: el[i][0].hours,
            suburb: el[i][0].suburb,
            description: el[i][1][0].description,
            lat: lat,
            lng: lng
          })

          if (count === this.props.items.length) {
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
