import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';


class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      drawnCards: []
    }
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({ deck: deck.data });
  }
  async getCard() {
    let id = this.state.deck.deck_id;
    try {
      let cardUrl = `${API_BASE_URL}/${id}/draw/`;
      let cardRes = await axios.get(cardUrl);
      if (!cardRes.data.success) {
        throw new Error('No cards remaining in deck');
      }
      // set state w/ new info from api
      let card = cardRes.data.cards[0];
      this.setState(st => ({
        drawnCards: [ ...this.state.drawnCards, { id: card.code, image: card.image, name: `${card.value} OF ${card.suit}` }]
      }))
    } catch (err) {
      alert(err);
    }
  }
  render() {
    const cards = this.state.drawnCards.map(c => {
      return <Card key={c.id} name={c.name} image={c.image} />;
    });
    return (
      <div>
        <h1 className='Deck-title'>Card Dealer</h1>
        <h2 className='Deck-title subtitle'>A little demo made with react</h2>
        <div className='Deck-cardarea'>
          {cards}
        </div>
        <button className='Deck-btn' onClick={this.getCard} >Get Card!</button>
      </div>
    )
  }
}

export default Deck;
