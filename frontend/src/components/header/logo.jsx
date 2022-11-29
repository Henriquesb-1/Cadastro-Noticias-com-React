import React from "react";
import { Link } from "react-router-dom"
import "./logo.css"

export default function logo() {
    return (
        <div className="logo-container">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
        </div>
    )
}