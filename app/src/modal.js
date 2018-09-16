import React, { Component } from 'react'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {

    } // this.state end
    this.closeModal = this.closeModal.bind(this)
  } // constructor end

  render () {
    return(
      <div>
        <div id='modal' className='modal'>
          <div className='modal-content'>
            <span onClick={this.closeModal} class="close">&times;</span>
            <p>Modal content</p>
          </div>
        </div>
      </div>
      
    ) // return ends
  } // render ends

  closeModal() {
    var modal = document.getElementById('modal')
    modal.style.display = 'none' 
  }

} // component end

export default Modal