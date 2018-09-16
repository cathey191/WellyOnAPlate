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
          id: 0,
          option: 'All Options'
        },
        {
          id: 1,
          option: 'Pork'
        },
        {
          id: 2,
          option: 'Chicken'
        },
        {
          id: 4,
          option: 'Pork'
        },
        {
          id: 5,
          option: 'Vegetarian'
        },
        {
          id: 6,
          option: 'Venison'
        },
        {
          id: 7,
          option: 'Other'
        }

      ]
    }
    this.changeOption = this.changeOption.bind(this)
    this.openModal = this.openModal.bind(this)
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
          <Modal {...this.state} changeOption={this.state.changeOption} />
        </main>
      </div>
    )
  }
  openModal () {
    var modal = document.getElementById('modal')
    modal.style.display = 'block'
  }
  
  changeCurrent (event) {
    if (event.target.value === 'cocktail') {
      this.setState({
        current: 'cocktail',
        type: 'Spirit',
        sortBy: 'Alphabetical',
        currentOptions: [
          {
            id: 0,
            option: 'All Options'
          },
          {
            id: 1,
            option: 'Gin'
          },
          {
            id: 2,
            option: 'Liquer'
          },
          {
            id: 3,
            option: 'Rum'
          },
          {
            id: 4,
            option: 'Tequila'
          },
          {
            id: 5,
            option: 'Vodka'
          },
          {
            id: 6,
            option: 'Whiskey'
          },
          {
            id: 7,
            option: 'Wine'
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
            id: 0,
            option: 'All Options'
          },
          {
            id: 1,
            option: 'Pork'
          },
          {
            id: 2,
            option: 'Chicken'
          },
          {
            id: 4,
            option: 'Pork'
          },
          {
            id: 5,
            option: 'Vegetarian'
          },
          {
            id: 6,
            option: 'Venison'
          },
          {
            id: 7,
            option: 'Other'
          }
        ]
      })
    } else if (event.target.value === 'dine') {
      this.setState({
        current: 'dine',
        type: 'Course',
        sortBy: 'Alphabetical',
        currentOptions: [
          {
            id: 0,
            option: 'All Options'
          },
          {
            id: 1,
            option: 'Entree'
          },
          {
            id: 2,
            option: 'Starter'
          },
          {
            id: 4,
            option: 'Festival'
          },
          {
            id: 5,
            option: 'Dessert'
          }
        ]
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

  changeOption(event){
    console.log(this.props);
    console.dir(event);
    var currentPage = this.state.current;
    this.setState({
      current: currentPage + '/' + event.target.value
    })
    
  }
}



ReactDom.render(<App />, document.querySelector('#header'))
