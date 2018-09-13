import React, {Component} from 'react'
import ReactDom from 'react-dom'

// Importing Components
import Woapdata from './data.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 'List',
      sort: ['Alphabetical', 'Price Low to High', 'Price High to Low'],
      current: 'burger',
      type: 'Protein'
    }
  }

  render () {
    return (
      <div>
        <div className='header'>
          <div className='header-top'>
            <form className='filter-form' onChange={this.changeCurrent.bind(this)}>
              <input className='filter-form' type='radio' name='event' value='cocktail' /><img className='icon' src='icons/cocktail.png' alt='' /> Cocktail
              <input className='filter-form' type='radio' name='event' value='burger' defaultChecked /><img className='icon' src='icons/hamburger-meal.png' alt='' /> Burger
              <input className='filter-form' type='radio' name='event' value='dine' /><img className='icon' src='icons/cutlery.png' alt='' /> Dine
            </form>
          </div>

          <div className='header-bottom'>
            <button className='btn purple-btn' value={this.state.type}>{this.state.type}</button>
            <h3>Sort by</h3>
            <select className='sort-by'>
              {this.state.sort.map((option, i) => <option value={option} key={i}>{option}</option>)}
            </select>
          </div>
        </div>
        <main>
          <Woapdata {...this.state} />
        </main>
      </div>
    )
  }

  changeCurrent (event) {
    if (event.target.value === 'cocktail') {
      this.setState({
        current: 'cocktail',
        type: 'Spirit'
      })
    } else if (event.target.value === 'burger') {
      this.setState({
        current: 'burger',
        type: 'Protein'
      })
    } else if (event.target.value === 'dine') {
      this.setState({
        current: 'dine',
        type: 'Course'
      })
    }
  }
}

ReactDom.render(<App />, document.querySelector('#header'))
