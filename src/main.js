import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import {Route, Routes} from 'react-router-dom';
 
class Main extends React.Component{
    render(){
        return (
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/contact" element={<Contact/>} />
            </Routes>
        )
    }
}
export default Main;

