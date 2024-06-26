import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Filme from "./pages/Filme/Filmes";
import Favoritos from "./pages/Favoritos/Favoritos";

import Error from "./pages/Error/Error";

import Header from "./components/Header/Header";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/filme/:id" element={ <Filme/>}/>
                <Route path="/favoritos" element={ <Favoritos/>}/>

                
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )   
}

export default RoutesApp;