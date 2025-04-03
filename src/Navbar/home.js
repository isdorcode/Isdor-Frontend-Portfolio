import React, { useState } from 'react';
import bold from '../images/Frontend Developer.png';
import arrow from '../images/123.png';
import pic from '../images/mainpic.png';
import github from '../images/232222w.png';
import linkedin from '../images/linkedin1.png';
import dribble from '../images/dribble2.png';
import pinterest from '../images/piterest.png';
import './home.css';
import About from './about';
import Project from './project';
import Testimonials from './testimonials';
import Contact from './contact';
import Footer from './footer';
import Navbar from './navbar';
const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const media = [
    {
      id: '09',
      img: github,
      text: 'Github',
      description: 'See my work',
      link: 'https://github.com',
    },
    {
      id: '25',
      img: linkedin,
      text: 'LinkedIn',
      description: 'See my work',
      link: 'https://linkedin.com',
    },
    {
      id: '323',
      img: pinterest,
      text: 'Pinterest',
      description: 'See my work',
      link: 'https://pinterest.com',
    },
    {
      id: '324',
      img: dribble,
      text: 'Dribble',
      description: 'See my work',
      link: 'https://dribble.com',
    },
  ];

  const handleSocialMediaClick = (link) => {
    window.open(link, '_blank');
  };

  const handleGetInTouchClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <Navbar />
    <div className="main">
      <div className="banner-con">
        <div className="text">
          <div className="freelance">
            <p>
              Currently Available For Freelance <br />
              Worldwide
            </p>
            <div className="first-line"></div>
          </div>

          <h3>Isdor Munengwa</h3>
          <h1>Innovative</h1>
          <img src={bold} alt="Frontend Developer" className="front" />
          <p>
            Bringing concepts to life with code and creativity —
            where beautiful design meets flawless functionality.
          </p>

          <div className="btn" onClick={handleGetInTouchClick}>
            Get in touch <img src={arrow} alt="Arrow" className="link-1" />
          </div>
        </div>

        <img src={pic} alt="Banner" className="main-imae" />
      </div>

      <div className="online-links">
        {media.map((item) => (
          <div
            className="live"
            key={item.id}
            onClick={() => handleSocialMediaClick(item.link)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={item.img} alt={item.text} className="media-icon" />
            <div className="live-text">
              <p className="cater1">{item.text}</p>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Get in Touch</h2>
            <p>Feel free to reach out for collaborations or inquiries!</p>  
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
    <section id='about' ><About/></section>
    <section  id='project' ><Project/></section>
    <section  id='test' ><Testimonials/></section>
    <section id='contact'><Contact/></section>
    <Footer/>
    </>
  );
};

export default Banner;