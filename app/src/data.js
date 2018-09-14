import React, { Component } from 'react'
import Items from './items.js'

class Woapdata extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentWillMount () {
    fetch('http://192.168.33.10:5000/burger')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  componentWillReceiveProps (nextProps) {
    fetch('http://192.168.33.10:5000/' + nextProps.current)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render () {
    const { error, isLoaded } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <Items {...this.state} allItems={this.state.items}></Items>
        </div>
      )
    }

    
  }
  
}

export default Woapdata
