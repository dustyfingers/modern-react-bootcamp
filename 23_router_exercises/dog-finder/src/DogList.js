import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <div className='row'>
                    {this.props.dogs.map(dog => (
                        <Link to={`/dogs/${dog.name}`} className='Dog col-md-6 col-lg-4 text-center' key={dog.name} >
                            <div>
                                <h3>{dog.name}</h3>
                                <img src='https://source.unsplash.com/800x800/?dog' alt={dog.name} />
                            </div>
                        </Link>
                        
                    ))}
                </div>
            </div>
        );
    }
}

export default DogList;