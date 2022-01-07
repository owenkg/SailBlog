import React, { Component } from 'react';
import { db } from '../utils/firebase';
import { collection, query, where, orderBy, onSnapshot, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';


export default class deletePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: this.title,
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
            //console.log("No Record Found");
            alert("No Record Found");
        } else {
            querySnapshot.forEach((doc) => {
                //console.log(doc.id, '=>', doc.data());
                let data = doc.data();
                this.setState({
                
                    id: doc.id,
                    
                })
                this.handleSubmit(event)
            })
        }
    }

    handleSubmit = async (event) => {

        event.preventDefault();

        await updateDoc(
            doc(db, 'blogs', `${this.state.id}`),
            {
                active: false
            }
        )
            .then((response) => {
                alert("Article Successfully Deleted!")
                //console.log(response)
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

    render() {
        return (
            <div>
                <form onSubmit={this.checkExists}>
                    <h2>Delete Article</h2>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange} />
                    <br />
                    {/* <label htmlFor="author">Author</label>
                    <input type="text" name="author" placeholder="Author" value={this.state.author} onChange={this.handleAuthorChange} />
                    <br /> */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
