import React, { useState, useEffect } from 'react';
import './about.css';

function About() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [animateProfile, setAnimateProfile] = useState(false);
  const [activeSection, setActiveSection] = useState('bio');
  
  const filterCategories = [
    {
      name: "Interests",
      options: ["Frontend", "Design", "UX/UI", "Mobile", "Web3"]
    },
    {
      name: "Technologies",
      options: ["React", "JavaScript", "CSS", "HTML5", "Vue"]
    },
    {
      name: "Projects",
      options: ["Portfolio", "E-commerce", "Dashboard", "Mobile App", "Game"]
    }
  ];

  // Modified skills section - removed the self-rating percentages
  const skills = [
    { name: "JavaScript" },
    { name: "React" },
    { name: "CSS/SCSS" },
    { name: "HTML5" },
    { name: "Vue" },
    { name: "UX/UI Design" }
  ];

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleTagSelect = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearTags = () => {
    setSelectedTags([]);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setAnimateProfile(true);
    setTimeout(() => setAnimateProfile(false), 1000);
  };

  const handleSocialClick = (platform) => {
    // Handle social media clicks - you would implement actual logic here
    console.log(`Clicked ${platform} icon`);
  };

  useEffect(() => {
    // Trigger profile animation on load
    setAnimateProfile(true);
    setTimeout(() => setAnimateProfile(false), 1000);
  }, []);

  return (
    <div className="modern-about-container">
      <div className="modern-about-header">
        <h2 className="modern-about-title">About Me</h2>
        <h4 className="modern-about-subtitle">Explore Creativity and More</h4>
      </div>
      
      <div className="about-tabs">
        <button 
          className={`tab-button ${activeSection === 'bio' ? 'active' : ''}`}
          onClick={() => handleSectionChange('bio')}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Bio
        </button>
        <button 
          className={`tab-button ${activeSection === 'skills' ? 'active' : ''}`}
          onClick={() => handleSectionChange('skills')}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Skills
        </button>
        <button 
          className={`tab-button ${activeSection === 'interests' ? 'active' : ''}`}
          onClick={() => handleSectionChange('interests')}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          Interests
        </button>
      </div>
      
      <div className="about-content-wrapper">
        <div className={`profile-section ${animateProfile ? 'animate-profile' : ''}`}>
          <div className="profile-image-container">
            <div className="profile-image-placeholder">IM</div>
          </div>
          <div className="profile-social">
            <button 
              onClick={() => handleSocialClick('linkedin')} 
              className="social-icon"
              aria-label="LinkedIn profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </button>
            <button 
              onClick={() => handleSocialClick('github')} 
              className="social-icon"
              aria-label="GitHub profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </button>
            <button 
              onClick={() => handleSocialClick('instagram')} 
              className="social-icon"
              aria-label="Instagram profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="about-content">
          {activeSection === 'bio' && (
            <div className="bio-content fade-in">
              <p className="modern-about-description">
                Welcome to my digital space! I'm <span className="highlight">Isdor Munengwa</span>, a frontend developer passionate about
                creating engaging, user-friendly websites. With a focus on clean design and seamless
                functionality, I bring ideas to life.
              </p>
              <p className="modern-about-description">
                My journey in web development began with a curiosity about how digital experiences are crafted.
                Today, I specialize in building responsive interfaces that combine aesthetic appeal with practical usability.
                Let's build something extraordinary together!
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>isdor.munengwa@example.com</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+123 456 7890</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>New York, NY</span>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="skills-content fade-in">
              <h3 className="skills-title">Technical Skills</h3>
              
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                    </div>
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                ))}
              </div>

              <div className="experience-container">
                <h3 className="experience-title">Development Experience</h3>
                <div className="experience-timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>Frontend Developer</h4>
                      <p className="timeline-company">TechCorp Inc.</p>
                      <p className="timeline-period">2021 - Present</p>
                      <p>Building responsive web applications and interfaces using modern JavaScript frameworks.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>UI/UX Designer</h4>
                      <p className="timeline-company">Digital Solutions LLC</p>
                      <p className="timeline-period">2019 - 2021</p>
                      <p>Designed user interfaces and experiences for web and mobile applications.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="certifications">
                <h3 className="cert-title">Certifications</h3>
                <div className="cert-container">
                  <div className="cert-item">
                    <div className="cert-badge">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                    <div className="cert-info">
                      <h4>AWS Certified Developer</h4>
                      <p>Amazon Web Services - 2023</p>
                    </div>
                  </div>
                  <div className="cert-item">
                    <div className="cert-badge">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </svg>
                    </div>
                    <div className="cert-info">
                      <h4>React Developer Certification</h4>
                      <p>Meta - 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'interests' && (
            <div className="interests-content fade-in">
              <h3 className="interests-title">My Specialties & Interests</h3>

              {/* Filter Toggle Button */}
              <div className="filter-toggle" onClick={toggleFilter}>
                <span className="filter-toggle-text">
                  <svg className="filter-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                  </svg>
                  Explore My Specialties
                  {selectedTags.length > 0 && (
                    <span className="filter-badge">
                      {selectedTags.length}
                    </span>
                  )}
                </span>
                <svg 
                  className={`chevron-icon ${isFilterVisible ? 'rotate' : ''}`}
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>

              {/* Filter Content */}
              <div className={`filter-content ${isFilterVisible ? 'visible' : ''}`}>
                <div className="filter-categories">
                  {filterCategories.map((category, idx) => (
                    <div key={idx} className="filter-category">
                      <h3 className="category-title">{category.name}</h3>
                      <div className="tag-container">
                        {category.options.map((option, optionIdx) => (
                          <div 
                            key={optionIdx}
                            onClick={() => handleTagSelect(option)}
                            className={`filter-tag ${selectedTags.includes(option) ? 'selected' : ''}`}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="filter-actions">
                  <button onClick={clearTags} className="clear-button">
                    Clear All
                  </button>
                </div>
              </div>

              {/* Selected Tags Display */}
              {selectedTags.length > 0 && (
                <div className="selected-tags">
                  {selectedTags.map((tag, idx) => (
                    <div key={idx} className="selected-tag">
                      {tag}
                      <span 
                        onClick={() => handleTagSelect(tag)}
                        className="remove-tag"
                      >
                        ×
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Interests Cards */}
              <div className="interests-cards">
                <div className="interest-card">
                  <div className="interest-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <h4>Web Development</h4>
                  <p>Creating responsive, user-friendly websites with modern frameworks</p>
                </div>
                <div className="interest-card">
                  <div className="interest-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                  </div>
                  <h4>UI/UX Design</h4>
                  <p>Designing intuitive user experiences that captivate and engage</p>
                </div>
                <div className="interest-card">
                  <div className="interest-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h4>Frontend Architecture</h4>
                  <p>Building scalable and maintainable frontend solutions</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;