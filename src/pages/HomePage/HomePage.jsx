import React, { useState } from "react";
import "./HomePage.css";
import Products from "../../components/Products/Products";

export default function HomePage({activeCat, menuItems}) {
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
      </div>
    </main>
  );
};