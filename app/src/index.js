import React, {Component} from 'react'
import ReactDom from 'react-dom'

// Importing Components
import Header from './header.js'
import Woapdata from './data.js'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <main>
          <Woapdata />
        </main>
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#header'))
