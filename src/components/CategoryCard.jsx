import React from 'react';

const CategoryCard = ({ title, image }) => {
  return (
    <div className="card">
      {/* 1. We create a dedicated div for the background.
         2. We apply the image directly via inline styles using the prop.
      */}
      <div 
        className="card-background" 
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      
      {/* The text sits on top */}
      <h2>{title}</h2>
    </div>
  );
};

export default CategoryCard;