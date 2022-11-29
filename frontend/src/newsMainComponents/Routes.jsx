import React from "react";
import { Routes, Route } from "react-router-dom"
import RegisterNews from "./registerNews"
import EditNews from "./editNews"
import NewsMainPage from "./newsMainPage"

export default function RoutesControl() {
    return (
        <Routes>
            <Route exact path="/" element={<NewsMainPage />} />
            <Route path="*" element={<NewsMainPage />} />
            <Route path="/registerNews" element={<RegisterNews />} />
            <Route path="/editNews" element={<EditNews />} />
        </Routes>
    )
}