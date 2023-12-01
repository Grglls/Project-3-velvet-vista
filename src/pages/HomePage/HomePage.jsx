import React, { useState } from "react";
import "./HomePage.css";
import Products from "../../components/Products/Products";

export default function HomePage({activeCat, menuItems, setCart}) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <main className="HomePage">
      <div>
        <header>
          <h1 className="hero-title">Wardrobe Essentials</h1>
          <p className="hero-desc"></p>
        </header>
        <Products 
            activeCat={activeCat} 
            menuItems={menuItems.filter(item => item.category.name === activeCat)} 
            setCart={setCart}
        />
      </div>
    </main>
  );
};