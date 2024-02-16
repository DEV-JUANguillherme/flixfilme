import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Filme from "./pages/Filme/Filmes";

import Header from "./components/Header/Header";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/filme/:id" element={ <Filme/>}/>
            </Routes>
        </BrowserRouter>
    )   
}

export default RoutesApp;