import React, { Component } from 'react'

class Mapdata extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    fetch('http://192.168.33.10:5000/map').then(res => res.json()).then(
      result => {
        console.log(result)
      },
      error => {
        this.setState({
          isLoaded: true,
          error,
          pageChange: false
        })
      }
    )
  }

  render () {
    return <div />
  }
}

export default Mapdata
