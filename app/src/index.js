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
      currentOptions: [
        {
          id: 1,
          option: 'Chicken'
        },
        {
          id: 2,
          option: 'Lamb'
        },
        {
          id: 3,
          option: 'Vegan'
        }
      ]
    }
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
                <label className='nav-group' for='cocktail'>
                  <img className='icon' src='icons/cocktail.png' alt='' />{' '}
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
                <label className='nav-group' for='burger'>
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
                <label className='nav-group' for='dine'>
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
          <Modal {...this.state} />
        </main>
      </div>
    )
  }
  openModal () {
    var modal = document.getElementById('modal')
    modal.style.display = 'block'
  }

  editModal () {
    var modalOptions = document.getElementById('modalOptions')
  }

  changeCurrent (event) {
    if (event.target.value === 'cocktail') {
      this.setState({
        current: 'cocktail',
        type: 'Spirit',
        sortBy: 'Alphabetical',
        currentOptions: [
          {
            id: 1,
            option: 'Vodka'
          },
          {
            id: 2,
            option: 'Gin'
          },
          {
            id: 3,
            option: 'Bourbon'
          },
          {
            id: 4,
            option: 'Rum'
          }
        ]
      })
    } else if (event.target.value === 'burger') {
      this.setState({
        current: 'burger',
        type: 'Protein',
        sortBy: 'Alphabetical',
        currentOptions: [
          {
            id: 1,
            option: 'Chicken'
          },
          {
            id: 2,
            option: 'Lamb'
          },
          {
            id: 3,
            option: 'Vegan'
          }
        ]
      })
    } else if (event.target.value === 'dine') {
      this.setState({
        current: 'dine',
        type: 'Course',
        sortBy: 'Alphabetical'
      })
    }
  }

  changeSort (event) {
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
}

ReactDom.render(<App />, document.querySelector('#header'))
