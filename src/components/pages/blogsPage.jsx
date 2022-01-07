import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class blogsPage extends Component {
    render() {
        return (
            <div>
                <div className="blog">
                    <h2>&nbsp;News Letter</h2>

                    <ul>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/view" >View Articles</Link>
                        </li>
                        <li>
                            <Link to="/add" >Add Article</Link>
                        </li>
                        <li>
                            <Link to="/update" >Update Article</Link>
                        </li>
                        <li>
                            <Link to="/delete" >Delete Article</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}