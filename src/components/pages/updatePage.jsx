import React, { Component } from 'react';
import { db } from '../utils/firebase';
import { where, doc, collection, query, onSnapshot, getDocs, updateDoc, Timestamp } from 'firebase/firestore';


export default class updatePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: this.title,
            author: this.author,
            article: this.article,
            active: false,
            date: Timestamp.now(),
            exists: false,
            id: this.id
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.checkExists = this.checkExists.bind(this);

    }

    checkExists = async (event) => {
        event.preventDefault();

        const requestQuery = query(
            collection(db, "blogs"), where("title", "==", `${this.state.title}`)
        )
        const querySnapshot = await getDocs(requestQuery)
        if (querySnapshot.size < 1) {
            ////console.log("No Record Found");
            alert("No Record Found");
        } else {
            querySnapshot.forEach((doc) => {
                ////console.log(doc.id, '=>', doc.data());
                let data = doc.data();
                this.setState({
                    id: doc.id,
                    exists: true,
                    author: data.author,
                    article: data.article,
                    title: data.title,
                    active: data.active
                })
            })
        }

        
    }

    handleSubmit = async (event) => {

        event.preventDefault();

        let data = {
            title: this.state.title,
            author: this.state.author,
            article: this.state.article,
        }
        //console.log(data)

        await updateDoc(
            doc(db, 'blogs', `${this.state.id}`), {
            title: this.state.title,
            author: this.state.author,
            article: this.state.article,
        }

        )
            .then((response) => {
                alert("Article Successfully Updated!")
                //console.log("Article Successfully Updated!")
            })
            .catch((exception) => {
                alert(exception)
                //console.log(exception)
            })
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAuthorChange = (event) => {
        this.setState({
            author: event.target.value
        })
    }

    handleArticleChange = (event) => {
        this.setState({
            article: event.target.value
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.exists ?
                        <div>
                            <h3>Update Article</h3>
                            <form onSubmit={this.handleSubmit} className='add' name='add'>
                                <label htmlFor="title" >Title</label> &nbsp;
                                <input type="text" name="title" value={this.state.title} placeholder='Article Title' onChange={this.handleTitleChange} />
                                <br />
                                <label htmlFor="article" >Author</label>&nbsp;
                                <input type="text" name="title" placeholder='Author' value={this.state.author} onChange={this.handleAuthorChange} />
                                <br />
                                <label htmlFor="article" >Article</label>&nbsp;
                                <textarea type="text" name="title" placeholder='Article' value={this.state.article} onChange={this.handleArticleChange} />
                                <br />

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        :
                        <form onSubmit={this.checkExists}>
                            <h2>Update Article</h2>
                            <br />
                            <label htmlFor="title">Title</label>&nbsp;
                            <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange} />
                            <br />
                            <label htmlFor="author">Author</label>&nbsp;
                            <input type="text" name="author" placeholder="Author" value={this.state.author} onChange={this.handleAuthorChange} />
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                }

            </div>
        )
    }
}
