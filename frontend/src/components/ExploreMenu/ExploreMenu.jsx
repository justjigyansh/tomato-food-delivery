import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  const handleCategoryClick = (item) => {
    setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name));
  };

  return (
    <section className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list && menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(item)}
            className="explore-menu-list-item"
            role="button" // Indicates this div is clickable
            tabIndex={0} // Allows keyboard navigation
            onKeyPress={(e) => { if (e.key === 'Enter') handleCategoryClick(item); }} // Handle keyboard interactions
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreMenu;
