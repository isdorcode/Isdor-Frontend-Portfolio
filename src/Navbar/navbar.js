import React, { useState, useEffect } from 'react';
import logos from '../images/logo.png';
import vet from '../images/Vector.png';
import './navbar.css';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img 
          src={logos} 
          alt="Logo" 
          className={`logo-img ${scrolled ? 'logo-scrolled' : ''}`} 
        />
      </div>
      
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
      </div>
      
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <ul>
        <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
        <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
<li><a href="#project" onClick={() => scrollToSection('project')}>Projects</a></li>
        <li><a href="#test" onClick={() => scrollToSection('test')}>Testimonials</a></li>
        <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
      
      <a className="contact-btn" href="/contact">
        <img src={vet} alt="Send" className="send" />
        <span className="one">Let's Talk</span>
      </a>
    </div>
  );
};

export default Navbar;