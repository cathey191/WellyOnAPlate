import React, { Component } from 'react'
import './modal.css'

class Modal extends Component {
  constructor (props) {
    super(props)
    this.state = {} // this.state end
    this.closeModal = this.closeModal.bind(this)
  } // constructor end

  render () {
    return (
      <div>
        <div id='modal' className='modal'>
          <div className='modal-content'>
            <span onClick={this.closeModal} class='close'>×</span>
            <p>Modal content</p>
            <ul id='modalOptions'>
              {this.props.currentOptions.map(option => {
                return (
                  <li key={option.id} option={option}><span className='list-checkbox'></span>{option.option}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    ) // return ends
  } // render ends

  closeModal () {
    var modal = document.getElementById('modal')
    modal.style.display = 'none'
  }
} // component end

export default Modal
