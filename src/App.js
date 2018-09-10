import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    const Home = () => (
      <div>
        <h2>Home</h2>
      </div>
    )
    
    const About = () => (
      <div>
        <h2>About</h2>
      </div>
    )
    
    const Topic = ({ match }) => (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    )
    
    const Topics = ({ match }) => (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>
              Rendering
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>
              Components
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props vs State
            </Link>
          </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route exact path={match.path} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    )

    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
