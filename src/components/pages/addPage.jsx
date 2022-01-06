import React, { Component } from 'react';
import { db } from '../utils/firebase';
import {doc, setDoc, Timestamp} from 'firebase/firestore';
import '../styles/addPage.css';

export default class addPage extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             title: this.title,
             author: this.author,
             article: this.article,
             date: this.date,
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    };

    handleSubmit = async ( event ) => {
        event.preventDefault()

        try {
            await setDoc(
                doc(db,'blogs',`${this.state.author}`),
                {
                    title: this.state.title,
                    author: this.state.author,
                    article: this.state.article,
                    date: Timestamp.now(),
                    active: true,
                }
            ).then((response) => {
                console.log(response)
            })
        }
        catch (exception) {
            console.log(`An exception has occured:${exception}`);
            alert(`An exception has occured:${exception}`);
        }
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleAuthorChange = (event) => {
        this.setState({
            author: event.target.value,
        })
    }

    handleArticleChange = (event) => {
        this.setState({
            article: event.target.value,
        })
    }

    // handleTitleChange = (event) => {
    //     this.setState({
    //         title: event.target.value,
    //     })
    // }
    
    render() {
        return (
            <div>
                <h3>Add Article</h3>
                <form onSubmit={this.handleSubmit} className='add' name='add'>
                    <label htmlFor="title" >Title</label>
                    <input type="text" name="title" placeholder='Article Title' onChange={this.handleTitleChange}/>
                    <label htmlFor="article" >Author</label>
                    <input type="text" name="title" placeholder='Author' onChange={this.handleAuthorChange}/>
                    <label htmlFor="article" >Article</label>
                    
                    <textarea type="text" name="title" placeholder='Article'onChange={this.handleArticleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

