import React from 'react';
import './MenuItemCard.css'; 


const MenuItemCard = ({ item, quantity, onAdd, onRemove }) => {
  return (
    <div className="menu-item-card">
      <div className="image-container">
        <img src={item.image} alt={item.title} />
      </div>
      
      <div className="item-details">
        <h3>"{item.title}"</h3>
        <p className="description">({item.description})</p>
        
        <div className="price-action">
          <span className="price">{item.price.toFixed(3)}</span>
          
          {quantity === 0 ? (
            <button className="add-btn" onClick={() => onAdd(item)}>
              <i className="fa-solid fa-plus"></i>
            </button>
          ) : (
            <div className="counter-controls">
              <button className="minus" onClick={() => onRemove(item)}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <span className="count">{quantity}</span>
              <button className="plus" onClick={() => onAdd(item)}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;