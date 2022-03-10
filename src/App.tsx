import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/Blog";
import Blog from "./pages/Blog";
import Features from "./pages/Features";
import Feature from "./pages/Feature";
import Contact from "./pages/Contace";
import FAQ from "./pages/FAQ";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Navigate to='/index'/>}/>
                <Route path='/index' element={<Index/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blogs' element={<Blogs/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/features' element={<Features/>}/>
                <Route path='/feature' element={<Feature/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/faq' element={<FAQ/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );

}

export default App;
