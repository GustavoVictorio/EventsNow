import Details from "pages/Details";
import Events from "pages/Events";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Routess() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventos" element={<Events />} />
                <Route path="/detalhes" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}