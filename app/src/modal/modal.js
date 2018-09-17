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
            <span onClick={this.closeModal} className='close'>X</span>
            <span className='clear' />
            <h1 className='text-center'>{this.props.type}</h1>
            <br />
            <ul id='modalOptions' className='option-holder'>
              <form onChange={this.onChange} id='filterForm'>
                {this.props.currentOptions.options.map((option, index) => {
                  return (
                    (
                      <div key={index} option={option} className='modal-options'>
                        <label htmlFor={option}>{option}</label>
                        <input
                          type='radio'
                          name='event'
                          value={option}
                          id={option}
                        />
                      </div>
                    )
                  )
                })}

              </form>
            </ul>
            <br />
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
