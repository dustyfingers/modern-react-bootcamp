import React, { Component } from 'react';
import './DogList.css';


class DogList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='DogList'>
                <h1 className='display-1 text-center'>DOG LIST</h1>
                <div className='container'>
                    <div className='row'>
                        {this.props.dogs.map(dog => (
                            <div className='Dog col-md-6 col-lg-4 text-center' key={dog.name}>
                                <h3>{dog.name}</h3>
                                <img src='https://source.unsplash.com/800x800/?dog' alt={dog.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default DogList;