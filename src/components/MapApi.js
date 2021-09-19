import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapApi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    const mapStyles = {
      position: 'absolute',
      zIndex: 0,
      width: '100%',
      height: '80vh',
      margin: '30px auto',
    }

    return (
      <div
        style={{
          position: 'relative',
          zIndex: 0,
          width: '100%', // or you can use width: '100vw'
          height: '100vh', // or you can use height: '100vh'
        }}
      >
        <h2>You can see {this.props.country.capital} in the map</h2>
        <Map
          zoom={13}
          google={this.props.google}
          onClick={this.onMapClicked}
          style={mapStyles}
          initialCenter={this.props.country.coords}
        >
          <Marker onClick={this.onMarkerClick} name={'Current location'} />
        </Map>
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBU6vAzMEqHiyprbGZ6xSn2TSPnjqRBVWA',
})(MapApi)
