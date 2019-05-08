import React, { Component } from 'react';
import './Dog.css';
import campsitePic from './camp-8.jpeg';


class Dog extends Component {
	render() {
		return (
			<div>
				<h1 className="Dog">Dog</h1>
				<img className="Dog-image"src={campsitePic} alt=""/>
			</div>
		);
	}
}

export default Dog;