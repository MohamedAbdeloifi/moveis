import React from 'react'
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Series from './Series';
import Movies from './Movies'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-primary bg-primary" >
              <Link style={{color:"white"}} className="navbar-brand mb-0 h1" exact activeClassName="active" to="/">Demo Streaming
              </Link>
            <span className="navbar-item">
              Login
            </span>
          </nav>
          <nav className="navbar navbar-light bg-dark">
            <span className="navbar-brand mb-0 h1 text-white">Popular Titles</span>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/series" component={Series} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App