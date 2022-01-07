import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class landing extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to the Sail Blog!</h2>
                <p>Click <Link to="/blog">here</Link> to read some of the articles.</p>
            </div>
        )
    }
}
