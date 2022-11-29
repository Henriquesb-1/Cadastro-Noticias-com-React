import React, { Component } from "react";

import { create } from "../js/newsCrud";
import { uptadeFieldClass } from "../js/uptadeField";

import Header from "../components/header/header";
import Form from "../components/form/form";

export default class registerNews extends Component {

    state = {
        news: {
            title: "",
            category: "",
            description: "",
        }
    }

    save() {
        if (!this.state.news.title || !this.state.news.category || !this.state.news.description) {
            alert("Por favor, preencha todos os campos antes de continuar")
        }
        else {
            create(this)
            alert("Notícia cadastrada")
        }
    }

    render() {
        return (
            <>
                <Header />
                < Form uptadeField={e => uptadeFieldClass(e, this)}
                    save={(e) => this.save(e)}
                />
            </>
        )
    }
}
