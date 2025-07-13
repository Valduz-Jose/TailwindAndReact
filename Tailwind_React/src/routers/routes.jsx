import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Proyecto1 } from "../pages/Proyecto1";

export function MyRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/Proyecto1" element= {<Proyecto1/>} />
        </Routes>
        </BrowserRouter>
    );
}