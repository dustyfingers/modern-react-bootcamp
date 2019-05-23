import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css';


class ZenQuote extends Component {
  constructor(props) {
    console.log('INSIDE CONSTRUCTOR');
    super(props);
    this.state = { quote: '', isLoaded: false }
  }
  componentDidMount() {
    console.log('INSIDE COMPONENT DID MOUNT');
    // load data
    axios.get('https://api.github.com/zen').then(response => {
      this.setState({ quote: response.data, isLoaded: true });
    })
    // set state with data
  }
  componentDidUpdate() {
    console.log('INSIDE COMPONENT DID UPDATE');
  }
  render() {
    console.log('INSIDE RENDER');
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className='loader' id='loader-1' />
        )}
      </div>
    );
  }
}

export default ZenQuote;
