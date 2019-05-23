import React, { Component } from "react";
import axios from "axios";

class GithubUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        imgUrl: '',
        name: ''
      }
    };
  }
  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    let data = response.data;
    this.setState({ user:{ imgUrl: data.avatar_url, name: data.name } });
  }
  render() {
    return (
      <div>
        <h1>{this.state.user.name}</h1>
        <p>{this.state.user.bio}</p>
        <img src={this.state.user.imgUrl} />
      </div>
    );
  }
}

export default GithubUserInfo;
