import React, { useState} from 'react';
// import robot from '../images/robort.png';
import './about.css';

function About() {
  // const [activeLink, setActiveLink] = useState('About');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  // const [animateContent, setAnimateContent] = useState(false);
  
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

  // const handleLinkClick = (link) => {
  //   setActiveLink(link);
  //   setAnimateContent(true);
  //   setTimeout(() => setAnimateContent(false), 1000);
  // };

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

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setAnimateContent(false);
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, [activeLink]);

  return (
    <div className="modern-about-container">
      <div className="modern-about-header">
        <h2 className="modern-about-title">About Me</h2>
        <h4 className="modern-about-subtitle">Explore Creativity and More</h4>
      </div>
      
      <p className="modern-about-description">
        Welcome to my digital space! I'm Isdor Munengwa, a frontend developer passionate about
        creating engaging, user-friendly websites. With a focus on clean design and seamless
        functionality, I bring ideas to life. Let's build something extraordinary together!
      </p>
      
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

    </div>
  );
}

export default About;
