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
            articles: [],
            valid_articles: []
        }
    }


    componentDidMount() {
        const request = query(collection(db, 'blogs'), orderBy('author'))
        onSnapshot(request, (querySnapshot) => {
            // this.setState({
            //     articles: querySnapshot.docs
            // })
            ////console.log(querySnapshot)
            querySnapshot.forEach((element) => {
                
                let articleData = element.data();
                //console.log(articleData)
                this.setState({
                    articles: [...this.state.articles, articleData]
                })
                this.setState({
                    valid_articles:  this.state.articles.filter(article => article.active === true)
                })
                //console.log(this.state.valid_articles)
            })

        })
    }
    render() {
        return (
            <div>
                <h2>All Articles</h2>
                {this.state.valid_articles.length > 0 ?

                    this.state.valid_articles.map((valid_article) => {
                        return (<Article title={valid_article.title} article={valid_article.article} author={valid_article.author} />)
                    })
                    :
                    <p>No Articles available</p>
                }
            </div>
        )
    }
}
