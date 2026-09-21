import React from 'react';
import About from './About';
import Login from './Login';
import Home from './Home';
import Bookings from './Bookings';
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
                <Route path="/login" element={<Login />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
};
export default App;