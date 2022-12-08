/* **All backend needed in page are here** */

import Axios from "axios"

const url = "https://cadastro-noticias-com-react-backend.vercel.app/news"

function refreshBeforeRender() {
    return Axios(url)
        .then(resp => resp)
}

function uptadeDiv(element) {
    Axios.get(url)
        .then(resp => {
            element.setState({ newsList: resp.data })
        })
}

function create(element) {
    const newsToCreate = element.state.news
    Axios.post(url, newsToCreate)
        .then(() => uptadeDiv(element))
}

function uptadeNews(element) {
    const newstoUptade = element.state.news
    Axios.put(`${url}/${newstoUptade.id}`, newstoUptade)
        .then(() => uptadeDiv(element))
}

function deleteElement(news, element) {
    Axios.delete(`${url}/${news.id}`)
        .then(() => uptadeDiv(element))
}

function searchNews(term) {
    const searchedTerm = term.toLowerCase()
    return Axios.get(url)
        .then(resp => resp.data)
        .then(news => news.filter(news => news.title.toLowerCase().includes(searchedTerm) || news.category.toLowerCase().includes(searchedTerm)))
}

export { 
    create, 
    uptadeNews, 
    deleteElement, 
    refreshBeforeRender, 
    searchNews 
}
