import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Info from './Info' ;
import Error from './Error';
import Menu from './Menu';
import { Routes, Route } from 'react-router-dom';
const App = () => {
    return (
        <div className="tc">
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/info" element={<Info />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
};
export default App;