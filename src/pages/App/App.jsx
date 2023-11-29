import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';

export default function App() {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="App">
        <Routes>
          <Route path="/" element={<HomePage name={name} setName={setName} categories={categories} setCategories={setCategories} price={price} setPrice={setPrice} uploadImage={uploadImage} />} />
        </Routes>
      </main>
    </>
  );
}
