import React, { Component } from 'react'
import ReactDom from 'react-dom'

// Importing Components
import Woapdata from './data.js'
import Modal from './modal/modal.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 'List',
      sort: ['Alphabetical', 'Price Low to High', 'Price High to Low'],
      current: 'burger',
      type: 'Protein',
      sortBy: 'Alphabetical',
      optionChosen: '',
      currentOptions: {
        options: [
          'All Options',
          'Chicken',
          'Pork',
          'Vegetarian',
          'Venison',
          'Other'
        ],
        optionType: 'burger/'
      }
    }
    this.handleChangeOption = this.handleChangeOption.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  render () {
    return (
      <div>
        <div className='header'>
          <div className='header-top'>
            <form
              className='filter-form'
              onChange={this.changeCurrent.bind(this)}
            >
              <div className='nav-group'>
                <input
                  className='filter-form'
                  type='radio'
                  name='event'
                  value='cocktail'
                  id='cocktail'
                />
                <label className='nav-group' htmlFor='cocktail'>
                  <img className='icon' src='icons/cocktail.png' alt='' />
                  {' '}
                  Cocktail
                </label>
              </div>
              <div className='nav-group'>
                <input
                  className='filter-form'
                  type='radio'
                  name='event'
                  value='burger'
                  id='burger'
                  defaultChecked
                />
                <label className='nav-group' htmlFor='burger'>
                  <img className='icon' src='icons/hamburger-meal.png' alt='' />
                  {' '}
                  Burger
                </label>
              </div>
              <div className='nav-group'>
                <input
                  className='filter-form'
                  type='radio'
                  name='event'
                  value='dine'
                  id='dine'
                />
                <label className='nav-group' htmlFor='dine'>
                  <img className='icon' src='icons/cutlery.png' alt='' /> Dine
                </label>
              </div>
            </form>
          </div>

          <div className='header-bottom'>
            <button
              className='btn purple-btn'
              onClick={this.openModal}
              value={this.state.type}
            >
              {this.state.type}
            </button>
            <div className='nav-group'>
              <h3>Sort by</h3>
              <select
                className='sort-by'
                value={this.state.sortBy}
                id='myBtn'
                onChange={this.changeSort.bind(this)}
              >
                {this.state.sort.map((option, i) => (
                  <option value={option} key={i}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <main>
          <Woapdata {...this.state} />
          <Modal {...this.state} changeOption={this.handleChangeOption} />
        </main>
      </div>
    )
  }
  openModal () {
    var modal = document.getElementById('modal')
    modal.style.display = 'block'
  }

  changeCurrent (event) {
    document.getElementById('filterForm')[0].checked = true

    if (event.target.value === 'cocktail') {
      window.scrollTo(0, 0)
      this.setState({
        current: 'cocktail',
        type: 'Spirit',
        sortBy: 'Alphabetical',
        currentOptions: {
          options: [
            'All Options',
            'Gin',
            'Rum',
            'Vodka',
            'Whiskey',
            'Wine'
          ],
          optionType: 'cocktail/'
        }
      })
    } else if (event.target.value === 'burger') {
      window.scrollTo(0, 0)
      this.setState({
        current: 'burger',
        type: 'Protein',
        sortBy: 'Alphabetical',
        currentOptions: {
          options: [
            'All Options',
            'Chicken',
            'Pork',
            'Vegetarian',
            'Venison',
            'Other'
          ],
          optionType: 'burger/'
        }
      })
    } else if (event.target.value === 'dine') {
      window.scrollTo(0, 0)
      this.setState({
        current: 'dine',
        type: 'Course',
        sortBy: 'Alphabetical',
        currentOptions: {
          options: ['All Options', 'Entree', 'Starter', 'Festival', 'Dessert'],
          optionType: 'dine/'
        }
      })
    }
  }

  changeSort (event) {
    window.scrollTo(0, 0)
    if (event.target.value === 'Alphabetical') {
      this.setState({
        sortBy: 'Alphabetical'
      })
    } else if (event.target.value === 'Price Low to High') {
      this.setState({
        sortBy: 'Price Low to High'
      })
    } else if (event.target.value === 'Price High to Low') {
      this.setState({
        sortBy: 'Price High to Low'
      })
    }
  }

  handleChangeOption (option) {
    window.scrollTo(0, 0)
    this.setState({
      sortBy: 'alphabetical'
    })
    if (option === 'All Options') {
      this.setState({
        current: this.state.currentOptions.optionType
      })
    } else if (option !== 'All Options') {
      if (this.state.type === 'Protein') {
        this.setState({
          current: 'burger/type:' + option
        })
      } else if (this.state.type === 'Spirit') {
        this.setState({
          current: 'cocktail/type:' + option
        })
      } else if (this.state.type === 'Course') {
        this.setState({
          current: 'dine/type:' + option
        })
      }
    }
  }
}

ReactDom.render(<App />, document.querySelector('#header'))
