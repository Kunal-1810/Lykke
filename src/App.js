import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Info from './Info';
import Error from './Error';
import { LoginModal, BookingsModal, PackageDetailModal } from './Modal';
import './App.css';

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [userBookings, setUserBookings] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookPackage = (pkg) => {
    setUserBookings((prev) => [pkg, ...prev]);
  };

  return (
    <div className="app-container">
      <Menu 
        onOpenLogin={() => setIsLoginOpen(true)} 
        onOpenBookings={() => setIsBookingsOpen(true)}
        isScrolled={isScrolled}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              onSelectPackage={(pkg) => setSelectedPackage(pkg)} 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
            />
          } 
        />
        <Route path="/info" element={<Info onSelectPackage={(pkg) => setSelectedPackage(pkg)} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* MODALS */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />

      <BookingsModal 
        isOpen={isBookingsOpen} 
        onClose={() => setIsBookingsOpen(false)} 
        bookings={userBookings} 
      />

      <PackageDetailModal 
        isOpen={!!selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
        pkg={selectedPackage} 
        onBookNow={handleBookPackage} 
      />
    </div>
  );
};

export default App;