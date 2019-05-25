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
    this.state = { jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]') };
    this.handleVote = this.handleVote.bind(this);
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }
  async getJokes() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
      });
      jokes.push({ id: uuid(), text: res.data.joke, votes: 0 });
    }
    this.setState({ jokes: jokes });
    window.localStorage.setItem('jokes', JSON.stringify(jokes));
  }
  handleVote(id, delta) {
    this.setState(
      st => ({
        jokes: st.jokes.map(j => j.id === id ? {...j, votes: j.votes + delta} : j)
      })
    );
  }
  render() {
    return (
      <div className='JokeList'>
        <div className='JokeList-sidebar'>
            <h1 className='JokeList-title'>Dad Jokes</h1>
            <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/face-with-tears-of-joy_1f602.png' alt='emoji'/>
            <button className='JokeList-getmore'>New Jokes</button>
        </div>

        <div className='JokeList-jokes'>
          {this.state.jokes.map(j => (
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
