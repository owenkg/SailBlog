import React, { Component } from 'react';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";

class Article extends Component {

    constructor({ title, author, article }) {
        super({ title, author, article })

        this.state = {
            title: title,
            author: author,
            article: article,
        }
    }


    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <p>{this.state.article}</p>
                <p>{this.state.author}</p>
            </div>
        )
    }
}


export default class viewPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            articles: []
        }
    }


    componentDidMount() {
        const request = query(collection(db, 'blogs'), orderBy('author'))
        onSnapshot(request, (querySnapshot) => {
            // this.setState({
            //     articles: querySnapshot.docs
            // })
            //console.log(querySnapshot)
            querySnapshot.forEach((element) => {
                let articleData = element.data();
                this.setState({
                    articles: [...this.state.articles, articleData]
                })
                console.log(articleData)
            })

        })
    }
    render() {
        return (
            <div>
                <h2>Test</h2>
                {this.state.articles.map((article) => {
                    return (<Article title={article.title} article={article.article} author={article.author} />)
                })}
            </div>
        )
    }
}
