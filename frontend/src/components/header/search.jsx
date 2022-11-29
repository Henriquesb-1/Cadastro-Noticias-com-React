import React from "react";
import { Link } from "react-router-dom";

import "./search.css"

function SearchField(props) {
    return (
        <div className={props.visible ? "search-container-show" : "search-container-hidden"}>
            <div className="input-text-area">
                <input type="text"
                    placeholder="Pesquisar por Noticias"
                    name="searchTerm"
                    className="search-field"
                    onChange={props.onChange}
                    value={props.value}
                />
            </div>
            <span className="search-button" onClick={props.onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                    <path fillRule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z">
                    </path>
                </svg>
            </span>
        </div>
    )
}

export default SearchField