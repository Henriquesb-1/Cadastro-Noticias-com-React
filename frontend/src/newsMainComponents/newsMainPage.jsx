import React, { Fragment, useEffect, useState } from "react";

import { refreshBeforeRender, searchNews } from "../js/newsCrud";
import { uptadeFieldFunction } from "../js/uptadeField";

import Main from "../components/main/main";
import NewsDiv from "../components/newsDiv/newsDiv"
import Header from "../components/header/header";

export default function NewsMain() {

    const [newsList, setNewsList] = useState([])
    let [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        refreshBeforeRender().then(resp => setNewsList(resp.data))
    }, [])


    function mapElement(element) {
        if (element.length === 0) {
            return <div><h1>Nenhuma notícia cadastrada</h1></div>
        } else {
            return element.map((news, index) => {
                return (
                    < NewsDiv key={index} news={newsList} title={news.title} category={news.category} description={news.description} />
                )
            })
        }
    }

    function searchForNews() {
        searchNews(searchTerm)
            .then(resp => setNewsList(resp))
            .catch(() => alert("Erro"))
    }

    return (
        <Fragment>
            <Header onClick={searchForNews} 
                    onChange={e => uptadeFieldFunction(e, searchTerm, setSearchTerm)} 
                    value={searchTerm} 
                    visible
                />
            <Main myClass={"news-container"}>
                {mapElement(newsList)}
            </Main>
        </Fragment>
    )
}
