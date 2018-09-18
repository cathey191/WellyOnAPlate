import React, { Component } from 'react'

class Items extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: 'here is some text',
      items: this.props.allItems
    } // this.state end
  }

  render () {
    if (
      this.props.allItems[0][1][0].event === 'burger' ||
      this.props.allItems[0][1][0].event === 'cocktail'
    ) {
      return (
        <div>
          {this.props.allItems.map((item, i) => (
            <div className='item' key={i}>
              <div className='list-item'>
                <h1>
                  {item[0].company}
                  <span className='item-cost'>${item[1][0].price}</span>
                </h1>
                <h2 className='item-name'>
                  <img
                    src='./icons/hamburger-meal.png'
                    alt=''
                    className='icon-small'
                  />
                  {item[1][0].title}
                </h2>
                <p>{item[1][0].description}</p>

                <div className='list-bottom'>
                  <a href={'http://' + item[0].website}>
                    <button className='btn btn-visit'>Visit Site</button>
                  </a>
                </div>
              </div>
              <hr className='list-break' />
            </div>
          ))}
        </div>
      )
    } else if (this.props.allItems[0][1][0].event === 'dine') {
      return (
        <div>
          {this.props.allItems.map(function (item, i) {
            if (item[1][0].dishes.length === 3) {
              return (
                <div className='item' key={i}>
                  <div className='list-item'>
                    <h1 className='venue-name'>
                      {item[0].company}
                      <span className='item-cost'>${item[1][0].price}</span>
                    </h1>
                    <h2 className='item-name'>
                      <img
                        src='./icons/cutlery.png'
                        className='icon-small'
                        alt=''
                      />
                      {item[1][0].dishes[0].course1_type}
                    </h2>
                    <p>{item[1][0].dishes[0].course1}</p>
                    <h2 className='item-name'>
                      {item[1][0].dishes[1].course2_type}
                    </h2>
                    <p>{item[1][0].dishes[1].course2}</p>
                    <h2 className='item-name'>
                      {item[1][0].dishes[2].course3_type}
                    </h2>
                    <p>{item[1][0].dishes[2].course3}</p>

                    <div className='list-bottom'>
                      <a href={'http://' + item[0].website}>
                        <button className='btn btn-visit'>Visit Site</button>
                      </a>
                    </div>
                  </div>
                  <hr className='list-break' />
                </div>
              )
            } else {
              return (
                <div className='item' key={i}>
                  <div className='list-item'>
                    <h1 className='venue-name'>
                      {item[0].company}
                      <span className='item-cost'>${item[1][0].price}</span>
                    </h1>
                    <h2 className='item-name'>
                      <img
                        src='./icons/cutlery.png'
                        className='icon-small'
                        alt=''
                      />
                      {item[1][0].dishes[0].course1_type}
                    </h2>
                    <p>{item[1][0].dishes[0].course1}</p>
                    <h2 className='item-name'>
                      {item[1][0].dishes[1].course2_type}
                    </h2>
                    <p>{item[1][0].dishes[1].course2}</p>

                    <div className='list-bottom'>
                      <a href={'http://' + item[0].website}>
                        <button className='btn btn-visit'>Visit Site</button>
                      </a>
                    </div>
                  </div>
                  <hr className='list-break' />
                </div>
              )
            }
          })}
        </div>
      )
    }
  } // render ends
}

export default Items
