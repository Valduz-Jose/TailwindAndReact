import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";

export function MyRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Home/>} />
        </Routes>
        </BrowserRouter>
    );
}