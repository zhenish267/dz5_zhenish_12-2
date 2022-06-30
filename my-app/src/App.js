import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Menu from "./components/menu/Menu";
import MainPage from "./pages/mainPage/MainPage";
import UsersPage from "./pages/usersPage/UsersPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <MainPage/> }/>
                <Route path="/usersPage" element={ <UsersPage/> }/>
            </Routes>
            {/*<div className="App">*/}
            {/*    <Menu/>*/}
            {/*</div>*/}
        </BrowserRouter>
    );
}

export default App;
