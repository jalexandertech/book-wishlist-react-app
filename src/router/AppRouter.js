import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import WishList from "../components/WishList";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
            <Header/>
            <div className="main-content">
                <Routes>
                    <Route path='/' element={<WishList/>} exact={true}/>
                    <Route path='/add' element={<AddBook/>}/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    );
};

export default AppRouter;