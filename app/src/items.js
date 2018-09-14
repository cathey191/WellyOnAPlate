import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Woapdata from './data.js'



class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'here is some text',
            items: this.props.allItems
        } // this.state end

        this.testFunction = this.testFunction.bind(this)
    }

    render() {
        if (this.state.items[0][1][0].event == 'burger') {
            return (
                <div>
                    {this.state.items.map((item, i) =>
                        <div key={i}>
                            <div className='list-item'>
                                <h1 className='venue-name'>{item["0"].company}<span className='item-cost'>${item["1"]["0"].price}</span></h1>
                                <h2 className='item-name'><img src='./icons/hamburger-meal.png' className='icon-small' />{item[1][0].title}</h2>
                                <p>{item[1]["0"].description}</p>

                                <div className="list-bottom">
                                    <button className="btn btn-visit" onClick={this.testFunction}>Visit Site</button>
                                </div>
                            </div>
                            <hr className='list-break' />
                        </div>
                    )}
                </div>
            )
        } else if (this.state.items[0][1][0].event == 'dine') {
            return (
                <div>
                    {this.state.items.map((item, i) =>
                        <div key={i}>
                            <div className='list-item'>
                                <h1 className='venue-name'>{item["0"].company}<span className='item-cost'>{item["1"]["0"].price}</span></h1>
                                <h2 className='item-name'><img src='./icons/cutlery.png' className='icon-small' />{item[1][0].dishes[0].course1_type}</h2>
                                <p>{item[1][0].dishes[0].course1}</p>
                                <h2 className='item-name'>{item[1][0].dishes[1].course2_type}</h2>
                                <p>{item[1][0].dishes[1].course2}</p>


                                <div className="list-bottom">
                                    <button className="btn btn-visit">Visit Site</button>
                                </div>
                            </div>
                            <hr className='list-break' />
                        </div>
                    )}
                </div>
            )
        }

    } // render ends

    testFunction() {
        console.log(this.state.items[0][1][0].event)
    }

}

export default Items;