import React, { useState, useEffect } from 'react';
import niceone from '../images/Avatar Image32555.png';
import nicetwo from '../images/pic.png';
import nicetree from '../images/Avatar Image32555.png';
import './testimonials.css';

const testmony = [
    {
        id: 1,
        name: 'Mr Jones',
        title: 'Teacher',
        description: 'Turned our vision into a stunning, user-friendly site. Highly recommended!',
        image: niceone
    },
    {
        id: 3,
        name: 'N. Nyekete',
        title: 'IT Senior',
        description: 'Creative, professional, and delivered beyond expectations. Amazing work!.',
        image: nicetwo
    },
    {
        id: 2,
        name: 'Mr Jones',
        title: 'Web Developer',
        description: 'Smooth process, exceptional results. A true talent to work with!',
        image: nicetree
    },
];

const Testimonials = () => {
    // State for active testimonial
    const [activeCard, setActiveCard] = useState(1); // Set first card as default active
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard(current => {
                const nextIndex = testmony.findIndex(item => item.id === current) + 1;
                return nextIndex >= testmony.length ? testmony[0].id : testmony[nextIndex].id;
            });
        }, 5000); // Change testimonial every 5 seconds
        
        return () => clearInterval(interval);
    }, []);
    
    // Handle email submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setEmail('');
            // Here you would typically send the email to your server
            
            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }
    };
    
    return (
        <div className='testimonials-section'>
            <h2 className="section-title">Testimonials</h2>
            <p className='about-testimonials'>Here, you'll find heartfelt feedback from clients and collaborators who've experienced my work firsthand. Their words reflect my commitment to delivering results.</p>
            
            <ul className="testimonials-list">
                {testmony.map((item) => (
                    <li
                        className={`testimonial-card ${activeCard === item.id ? 'active-card' : ''}`}
                        key={item.id}
                        onClick={() => setActiveCard(item.id)}
                        onMouseEnter={() => setActiveCard(item.id)}
                    >
                        <div className="testimonial-content">
                            <div className="testimonial-img-container">
                                <img src={item.image} alt={`${item.name} avatar`} className='testimonial-image'/>
                            </div>
                            <h5 className="testimonial-name">{item.name}</h5>
                            <p className='testimonial-title'>{item.title}</p>
                            <p className='testimonial-description'>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
            
            <div className="newsletter-container">
                <h4 className="newsletter-title">Subscribe to Our Newsletter</h4>
                {isSubmitted ? (
                    <div className="success-message-container">
                        <p className="success-message">Thank you for subscribing!</p>
                        <div className="checkmark-icon"></div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="email-form">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            className="email-input"
                        />
                        <button type="submit" className="submit-btn">Subscribe</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Testimonials;