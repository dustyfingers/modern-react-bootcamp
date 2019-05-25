import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
import uuid from 'uuid/v4';
import './JokeList.css';


class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  }
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
      loading: false
    };
    this.handleVote = this.handleVote.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.seenJokes = new Set(this.state.jokes.map(j => j.text));
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }
  async getJokes() {
    try {
      let jokes = [];
      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get('https://icanhazdadjoke.com/', {
          headers: { Accept: 'application/json' }
        });
        let newJoke = res.data.joke;
        if (!this.seenJokes.has(newJoke)) jokes.push({ id: uuid(), text: newJoke, votes: 0 });
      }
      this.setState(st => ({
        jokes: [...st.jokes, ...jokes],
        loading: false
      }),
      () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
      )
    }
    catch(e) {
      alert(e);
      this.setState({ loading: false });
    }
  }
  handleVote(id, delta) {
    this.setState(
      st => ({
        jokes: st.jokes.map(j => j.id === id ? {...j, votes: j.votes + delta} : j)
      }),
      () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    );
  }
  handleClick() {
    this.setState({ loading: true }, this.getJokes);

  }
  render() {
    if (this.state.loading) {
      return (
        <div className='JokeList-spinner'>
          <i className='far fa-8x fa-laugh fa-spin'/>
          <h1 className='JokeList-title'>Loading...</h1>
        </div>
      )
    }
    let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
    return (
      <div className='JokeList'>
        <div className='JokeList-sidebar'>
            <h1 className='JokeList-title'>Dad Jokes</h1>
            <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/face-with-tears-of-joy_1f602.png' alt='emoji'/>
            <button className='JokeList-getmore' onClick={this.handleClick}>New Jokes</button>
        </div>
        <div className='JokeList-jokes'>
          {jokes.map(j => (
            <Joke
              upvote={() => {this.handleVote(j.id, 1)}}
              downvote={() => {this.handleVote(j.id, -1)}}
              key={j.id}
              text={j.text}
              votes={j.votes}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
