import React, { Component } from 'react';


class Dog extends Component {
  componentDidMount() {
    console.log('DOG DID MOUNT');
  }
  componentWillUnmount() {
    console.log('DOG WILL UNMOUNT');
  }
  render() {
    console.log('DOG DID RENDER');
    return (
      <div>
        <h1>Dog</h1>
        <p>THIS DOG IS NAMED {this.props.name}!!!!</p>
      </div>
    )
  }
}

export default Dog;
