import React, { Component } from 'react'

export default class blogsPage extends Component {
    render() {
        return (
            <div>
                <div className="blog">
                    <div className="photo">
                        <img src="" alt="" srcset="" />
                    </div>
                    <div className="date_caption">
                        <p>17th Jan 2021</p>
                    </div>
                    <div className="title">
                        <h3>Article 1</h3>
                    </div>
                    <div className="author">
                        <p>John Doe</p>
                    </div>
                    <div className="article">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur laudantium, porro nulla iusto ex nobis doloremque doloribus incidunt vero! Eligendi quibusdam sunt provident illum nostrum non architecto molestiae et.
                    </div>
                </div>               
            </div>
        )
    }
}