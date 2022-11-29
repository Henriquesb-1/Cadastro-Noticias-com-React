import React from "react";
import { Link } from "react-router-dom"
import "./Nav.css"

export default function navegation() {
    return (
        <div className="navegation-container">
            <nav className="navegation">
                <Link to="/registerNews">
                    Cadastrar Notícia
                </Link>
                <Link to="/editNews">
                    Editar Notícia
                </Link>
            </nav>
        </div>
    )
}