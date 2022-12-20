import React, { Component, Fragment } from "react";

import Header from "../components/header/header";
import Main from "../components/main/main";
import NewsDiv from "../components/newsDiv/newsDiv"
import Form from "../components/form/form"

import { uptadeNews, deleteElement, refreshBeforeRender, searchNews } from "../js/newsCrud"
import { uptadeFieldClass } from "../js/uptadeField"

import "./editNews.css"
import "font-awesome/css/font-awesome.min.css"

export default class EditNews extends Component {

    state = {
        news: {
            title: "",
            category: "",
            description: "",
            searchTerm: ""
        },
        newsList: []
    }

    componentDidMount() {
        refreshBeforeRender()
            .then(resp => this.setState({ newsList: resp.data }))
    }

    loadForm(news) {
        this.setState({ news: news })
    }

    searchForNews(e) {
        e.preventDefault()

        searchNews(this.state.news.searchTerm)
            .then(resp => {this.setState({ newsList: resp })})
    }

    renderDivNews() {
        if (this.state.newsList.length === 0) {
            return <div><h1>Nenhuma notícia cadastrada</h1></div>
        } else {
            return this.state.newsList.map((news, index) => {
                return (
                    <div className="edit-container" key={index}>
                        <div className="edit-buttons">
                            <div className="edit-button">
                                <button onClick={(e) => this.loadForm(news, e)}>
                                    <i className="fa fa-pencil"></i>
                                </button>
                            </div>
                            <div className="delete-button">
                                <button onClick={(e) => deleteElement(news, this, e)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        < NewsDiv key={index} 
                            title={news.title} 
                            category={news.category} 
                            description={news.description} 
                        />
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <Fragment>

                <Header
                    onClick={e => this.searchForNews(e)}
                    onChange={(e) => uptadeFieldClass(e, this)}
                    value={this.state.news.searchTerm}
                    visible
                />

                <Main myClass="news-edit-container">
                    <div className="editable-news-container">
                        {this.renderDivNews()}
                    </div>

                    <Form titleValue={this.state.news.title}
                        categoryValue={this.state.news.category}
                        descriptionValue={this.state.news.description}
                        save={e => uptadeNews(this)}
                        uptadeField={e => uptadeFieldClass(e, this)}
                    />

                </Main>
            </Fragment>
        )
    }
}
