import React, {Component} from 'react'
import ReactDom from 'react-dom'

// Importing Components
import Woapdata from './data.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nextPage: 'Map',
      nextIcon: 'icons/Map.png',
      sort: ['Alphabetical', 'Price Low to High', 'Price High to Low'],
      current: 'burger',
      type: 'Protein',
      sortBy: 'Alphabetical'
    }
  }

  render () {
    return (
      <div>
        <div className='header'>
          <div className='header-top'>
            <form className='filter-form' onChange={this.changeCurrent.bind(this)}>
              <div className='nav-group'><input className='filter-form' type='radio' name='event' value='cocktail' id='cocktail' /><label className='nav-group' htmlFor='cocktail'><img className='icon' src='icons/cocktail.png' alt='' /> Cocktail</label></div>
              <div className='nav-group'><input className='filter-form' type='radio' name='event' value='burger' id='burger' defaultChecked /><label className='nav-group' htmlFor='burger'><img className='icon' src='icons/hamburger-meal.png' alt='' /> Burger</label></div>
              <div className='nav-group'><input className='filter-form' type='radio' name='event' value='dine' id='dine' /><label className='nav-group' htmlFor='dine'><img className='icon' src='icons/cutlery.png' alt='' /> Dine</label></div>
            </form>
          </div>

          <div className='header-bottom'>
            <button className='btn purple-btn' value={this.state.type}>{this.state.type}</button>
            <div className='nav-group' id='sort-by'>
              <h3>Sort by</h3>
              <select className='sort-by' value={this.state.sortBy} onChange={this.changeSort.bind(this)}>
                {this.state.sort.map((option, i) => <option value={option} key={i}>{option}</option>)}
              </select>
            </div>
          </div>
        </div>
        <main>
          <Woapdata {...this.state} />
          <button className='btn nav-group bottom-btn' onClick={this.changePage.bind(this)}><img className='icon' src={this.state.nextIcon} alt='' /> {this.state.nextPage}</button>
        </main>
      </div>
    )
  }

  changeCurrent (event) {
    if (event.target.value === 'cocktail') {
      window.scrollTo(0, 0)
      this.setState({
        current: 'cocktail',
        type: 'Spirit',
        sortBy: 'Alphabetical'
      })
    } else if (event.target.value === 'burger') {
      window.scrollTo(0, 0)
      this.setState({
        current: 'burger',
        type: 'Protein',
        sortBy: 'Alphabetical'
      })
    } else if (event.target.value === 'dine') {
      window.scrollTo(0, 0)
      this.setState({
        current: 'dine',
        type: 'Course',
        sortBy: 'Alphabetical'
      })
    }
  }

  changeSort (event) {
    if (event.target.value === 'Alphabetical') {
      window.scrollTo(0, 0)
      this.setState({
        sortBy: 'Alphabetical'
      })
    } else if (event.target.value === 'Price Low to High') {
      window.scrollTo(0, 0)
      this.setState({
        sortBy: 'Price Low to High'
      })
    } else if (event.target.value === 'Price High to Low') {
      window.scrollTo(0, 0)
      this.setState({
        sortBy: 'Price High to Low'
      })
    }
  }

  changePage () {
    if (this.state.nextPage === 'Map') {
      window.scrollTo(0, 0)
      this.setState({
        nextPage: 'List',
        nextIcon: 'icons/List.png'
      })
      document.querySelector('#sort-by').className += ' displayNone'
    } else if (this.state.nextPage === 'List') {
      window.scrollTo(0, 0)
      this.setState({
        nextPage: 'Map',
        nextIcon: 'icons/Map.png'
      })
      document.querySelector('#sort-by').classList.remove('displayNone')
    }
  }
}

ReactDom.render(<App />, document.querySelector('#header'))
