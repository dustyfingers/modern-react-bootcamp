import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css';


class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: '', isLoaded: false }
  }
  componentDidMount() {
    // load data
    axios.get('https://api.github.com/zen').then(response => {
      this.setState({ quote: response.data, isLoaded: true });
    })
    // set state with data
  }
  render() {
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
