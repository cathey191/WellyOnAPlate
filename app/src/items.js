import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Woapdata from './data.js'



class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'here is some text'
        } // this.state end

        this.testFunction = this.testFunction.bind(this)
    }

    render() {
        return (
            <div>
                <div className='list-item'>
                    <h1 className='venue-name'>{this.props.allItems["0"]["0"].company}<span className='item-cost'>${this.props.allItems["0"][1]["0"].price}</span></h1>
                    <h2 className='item-name'><img src='./icons/hamburger-meal.png' className='icon-small' />Buns got soul</h2>
                    <p>{this.props.allItems["0"][1]["0"].description}</p>

                    <div className="list-bottom">
                        <button className="btn btn-visit" onClick={this.testFunction}>Visit Site</button>
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
    } // render ends

    testFunction() {
        console.log(this.props.allItems)
    }

}

export default Items;