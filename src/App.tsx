import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Interests from "./pages/Interests";
import Projects from "./pages/Projects";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="interests" element={<Interests/>}/>
                    <Route path="projects" element={<Projects/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;