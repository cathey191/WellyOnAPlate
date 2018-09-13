import React, { Component } from 'react'

class Woapdata extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:5000/' + this.props.current)
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
          {this.state.items.map((item, i) => <div className='list' key={i}>
            <h1 className='venue-name'>{item[0].company}<span className='item-cost'>$22</span></h1>
            <h2 className='item-name'>Buns got soul</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </div>
          )}
        </div>
      )
    }
  }
}

export default Woapdata
