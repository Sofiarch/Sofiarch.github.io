import React from 'react';

const Header = ({ isEnglish, onToggleLang, onGoHome, isDarkMode, onToggleTheme }) => {
  return (
    <header className="top-header">
      {/* 1. Left: Theme Toggle (Sun/Moon) */}
      <div className="theme-toggle" style={{ position: 'absolute', left: '10px', top: '18px' }}>
        <button 
            onClick={onToggleTheme}
            style={{
                background: isDarkMode ? '#2a2a2a' : '#f0f0f0',
                color: isDarkMode ? '#fff' : '#333',
                border: '1px solid rgba(255,255,255,0.1)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}
        >
          {/* Show Sun in Dark Mode, Moon in Light Mode */}
          <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>

      {/* 2. Center: Logo */}
      <div className="logo" onClick={onGoHome} style={{cursor: 'pointer'}}>
        <h1>{isEnglish ? 'Family' : 'العائلة'}</h1>
        <span>{isEnglish ? 'Restobar' : 'مطعم وبار'}</span>
        <div className="header-info">
          <p className="address">
            <i className="fa-solid fa-location-dot"></i> 
            {isEnglish ? ' Baghdad, main street' : ' بغداد، الشارع العام'}
          </p>
          <p className="phone">
            <a href="tel:+9647727701185" onClick={(e) => e.stopPropagation()}>
              <i className="fa-solid fa-phone"></i> 07727701185
            </a>
          </p>
        </div>
      </div>

      {/* 3. Right: Language */}
      <div className="language-changer">
        <button onClick={onToggleLang}>
          {isEnglish ? 'English' : 'عربي'}
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;