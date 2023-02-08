import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../containers/Login/Login";
import App from "../containers/App/App";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default Router;
