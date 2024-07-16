
import Home from "./Components/Pages/Home/Home"
import CadNew from "./Components/Pages/CadNew/CadNew"
import Sobre from "./Components/Pages/Sobre/Sobre"
import Header from "./Components/Layout/Header/Header"
import ListagemNews from "./Components/Pages/ListagemNews/ListagemNews"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function Router(){
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<CadNew/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/ListagemNews" element={<ListagemNews/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router