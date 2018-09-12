import React from 'react'
import ReactDom from 'react-dom'

// Importing Components
import Header from './header.js'
import Woapdata from './data.js'

ReactDom.render(<Header />, document.querySelector('#header'))
ReactDom.render(<Woapdata />, document.querySelector('#list'))
