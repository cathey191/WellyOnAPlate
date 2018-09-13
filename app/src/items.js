import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Woapdata from './data.js'

console.dir(this.props.allItems);


class Items extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='list-item'>
                    <h1 className='venue-name'>1815 Cafe &amp; Bar<span className='item-cost'>$22</span></h1>
                    <h2 className='item-name'><img src='./icons/hamburger-meal.png' className='icon-small' />Buns got soul</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                    <div className="list-bottom">
                        <button className="btn btn-visit">Visit Site</button>
                    </div>
                </div>
                <hr className='list-break' />

                <div className='list-item'>
                    <h1 className='venue-name'>Annam Restaurant<span className='item-cost'>$22</span></h1>
                    <h2 className='item-name'><img src='./icons/cutlery.png' className='icon-small' />Festival Dish</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <h2 className='item-name'>Dessert</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>


                    <div className="list-bottom">
                        <button className="btn btn-visit">Visit Site</button>
                    </div>
                </div>
                <hr className='list-break' />
            </div>



        )
    }
}

export default Items;