import "./NavBar.css";
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';

import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

// To do: update <a> tags to <Link/> react tags, match to our pages.

export default function NavBar({ user, setUser, searchTerm, setSearchTerm, categoriesRef, activeCat, setActiveCat}){
    const navigate = useNavigate();
    
    const _handleLogOut = function() {
        setUser(null);
        logOut();
    }
    
    const _handleChange = function(event) {
        setSearchTerm(event.target.value)
        
    }
    
    const _handleSubmit = function(event) {
        event.preventDefault();
        navigate('/', { state: { searchTerm: searchTerm } });
    }

    return (
        <>            
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Velvet Vista</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Clothing
                                </a>
                                <ul className="dropdown-menu">
                                    <CategoryList
                                        categories={categoriesRef.current}
                                        activeCat={activeCat}
                                        setActiveCat={setActiveCat}
                                    />
                                </ul>
                            </li>
                            { (user) ? 
                                <>
                                    <li className="nav-item">
                                        <Link to="/orders" className="nav-link">Order History</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/orders/new" className="nav-link">Cart</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" onClick={_handleLogOut}>Log Out</Link>
                                    </li>
                                </>
                                :
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                            }
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search" 
                                onChange={_handleChange}
                                value={searchTerm}
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}