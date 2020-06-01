import React from 'react'
import Hello from './Hello'
import Cake from './Cake'
import { Switch, Route, Link } from 'react-router-dom'


class App extends React.Component {

  render() {
    return (
      <div id='app'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/hello'>Hello</Link></li>
          <li><Link to='/cake'>Cake</Link></li>
        </ul>
        <h2>Cake App</h2>
        <Switch>
          <Route path='/hello' component={Hello} />
          <Route path='/cake' component={Cake} />
        </Switch>
      </div>
    )
  }
}

export default App;