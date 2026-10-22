import React from 'react';
import About from './About';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Bookings from './Bookings';
import Packages from './Packages';
import PackageDetail from './PackageDetail';
import Book from './Book';
import InfoPage from './InfoPage';
import RequireAuth from './RequireAuth';
import ScrollToTop from './ScrollToTop';
import Error from './Error';
import Menu from './Menu';
import './App.css';
import { Routes, Route } from 'react-router-dom';


const App = () => {
    return (
        <div className="tc">
            <ScrollToTop />
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/package/:id" element={<PackageDetail />} />
                <Route path="/book/:id" element={<RequireAuth><Book /></RequireAuth>} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/info/:slug" element={<InfoPage />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
};

export default App;
