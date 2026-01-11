import React from 'react';

const Marquee = ({ activeSection, onSectionChange, isEnglish }) => {
    const sections = [
        { id: 'foods', label: isEnglish ? 'Foods' : 'مأكولات' },
        { id: 'drinks', label: isEnglish ? 'Drinks' : 'مشروبات' },
        { id: 'hookah', label: isEnglish ? 'Hookah' : 'أركيلة' },
        { id: 'desserts', label: isEnglish ? 'Desserts' : 'حلويات' },
    ];

    return (
        <nav className="marquee-nav">
            <div className="marquee-scroll-container">
                {sections.map((sec) => (
                    <button 
                        key={sec.id}
                        className={`marquee-btn ${activeSection === sec.id ? 'active' : ''}`}
                        onClick={() => onSectionChange(sec.id)}
                    >
                        {sec.label}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Marquee;