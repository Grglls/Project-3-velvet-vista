import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const [cart, setCart] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);

  // const navigate = useNavigate();

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToOrder(itemId) {
    const cart = await ordersAPI.addItemToCart(itemId);
    setCart(cart);
  }
  // const uploadImage = async (image) => {
	// 	const data = new FormData()
	// 	data.append("file", image)
	// 	data.append("upload_preset", "project-3")
	// 	data.append("cloud_name", "dz9ufxjca")
	// 	return fetch("https://api.cloudinary.com/v1_1/dz9ufxjca/image/upload",{
	// 		method: "post",
	// 		body: data
  //   		}).then(res => res.json())
  //     .catch(err => console.log(err))
	// };
  
  return (
    <>
      <NavBar 
        user={user} 
        setUser={setUser} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        categoriesRef={categoriesRef} 
        activeCat={activeCat} 
        setActiveCat={setActiveCat} 
      />

      {/* <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <main className="App">
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
          <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
          <Route path="/login" element={<AuthPage user={user} setUser={setUser} />} />
          <Route path="/" 
            element={
              <HomePage 
                name={name} 
                setName={setName} 
                categories={categories} 
                setCategories={setCategories} 
                price={price} 
                setPrice={setPrice} 
                activeCat={activeCat} 
                menuItems={menuItems}/>} 
                handleAddToOrder={handleAddToOrder}
                searchTerm={searchTerm}
              />
        </Routes>
      </main>
    </>
  );
}

// uploadImage = { uploadImage }