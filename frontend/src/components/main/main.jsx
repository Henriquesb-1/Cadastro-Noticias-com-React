import React from "react";

import "./main.css"

export default function Main(props) {
    return (
        <main className="container">
            <div className={props.myClass}>
                {props.children}
            </div>
        </main>
    )
}