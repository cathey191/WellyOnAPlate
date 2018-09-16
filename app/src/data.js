import React, { Component } from 'react'
import Items from './items.js'

class Woapdata extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentWillMount () {
    fetch('http://localhost:5000/burger')
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
    if (nextProps.current !== this.state.items[0][1][0].event) {
      fetch('http://localhost:5000/' + nextProps.current)
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
    } else {
      if (nextProps.sortBy === 'Alphabetical') {
        this.state.items.sort((a, b) => a[0].company.localeCompare(b[0].company))
      } else if (nextProps.sortBy === 'Price Low to High') {
        this.state.items.sort((a, b) => a[1][0].price - b[1][0].price)
      } else if (nextProps.sortBy === 'Price High to Low') {
        this.state.items.sort((a, b) => b[1][0].price - a[1][0].price)
      }
    }
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
          <Items {...this.state} allItems={this.state.items} />
        </div>
      )
    }
  }
}

export default Woapdata
