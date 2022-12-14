import React from "react";

import { BrowserRouter } from "react-router-dom"

import Footer from "../components/footer/footer";
import Routes from "../newsMainComponents/Routes";

import "font-awesome/css/font-awesome.min.css"
import "./app.css"

export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/*Header will be add in the main components*/}
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}
