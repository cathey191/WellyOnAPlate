import React, { Component } from 'react'
import './modal.css'

class Modal extends Component {
  constructor (props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
    this.onChange = this.onChange.bind(this)
  } // constructor end

  render () {
    return (
      <div>
        <div id='modal' className='modal'>
          <div className='modal-content'>
            <span onClick={this.closeModal} className='close'>×</span>
            <p>Modal content</p>
            <ul id='modalOptions'>
              <form onChange={this.onChange} id='filterForm'>
                {this.props.currentOptions.options.map((option, index) => {
                  return (
                    (
                      <div key={index} option={option}>
                        <input
                          className='filter-form'
                          type='radio'
                          name='event'
                          value={option}
                        />
                        {' '}
                        {option}
                        {' '}
                      </div>
                    )
                  )
                })}

              </form>
            </ul>
          </div>
        </div>
      </div>
    ) // return ends
  } // render ends

  onChange (e) {
    this.props.changeOption(e.target.value)
  }

  closeModal () {
    var modal = document.getElementById('modal')
    modal.style.display = 'none'
  }
} // component end

export default Modal
