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
  const [user, setUser] = useState(getUser());
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <>
      <NavBar user={user} setUser={setUser} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="App">
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
          <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
          <Route path="/login" element={<AuthPage user={user} setUser={setUser} />} />
          <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
          {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
          {/* <Route path="/*" element={<Navigate to="/orders/new" />} /> */}
        </Routes>
      </main>
    </>
  );
}
