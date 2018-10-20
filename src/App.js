import React, { Component } from 'react';
import Ball from './Ball';

class App extends Component {
  state = {
    x: 150,
    y: 400,
    hits: [],
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        x: Math.ceil(Math.random() * 500),
        y: Math.ceil(Math.random() * 500),
      })
    }, 1500)
  }
  handleClick = ({ clientX, clientY }) => {
    this.setState((prevState) => ({
      hits: [ ...prevState.hits, { clientX, clientY } ],
    }));
  }
  render() {
    return (
      <div>
        {this.state.hits.map((hit) => (
          <p
            key={`p-${hit.clientX}${hit.clientY}`}
            style={{ margin: 0 }}
          >
            x: {hit.clientX}, y: {hit.clientY}
          </p>
        ))}
        <Ball
          onClick={this.handleClick}
          x={this.state.x}
          y={this.state.y}
        />
      </div>
    );
  }
}

export default App;
