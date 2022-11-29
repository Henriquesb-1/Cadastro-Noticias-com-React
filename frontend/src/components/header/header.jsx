import React from "react"
import "./header.css"

import Logo from "./logo"
import Navegation from "./Nav"
import SearchField from "./search"

export default function Header(props) {

    return (
        <header className="header-container">
            <Logo />
            <Navegation />
            <SearchField  
                onClick={props.onClick} 
                onChange={props.onChange} 
                value={props.value}
                visible={props.visible}
                />
        </header>
    )
}