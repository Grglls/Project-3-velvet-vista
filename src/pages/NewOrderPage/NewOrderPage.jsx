import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function NewOrderPage({ user, setUser, cart, setCart }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);

  const navigate = useNavigate();

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

  async function handleChangeQty(itemId, newQty) {
    const cart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(cart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    setCart({totalQty: 0})
    console.log(cart.totalQty);
    navigate('/orders');
  }

  return (
    <>
      <main className="NewOrderPage">
        <OrderDetail
          order={ cart }
          handleChangeQty={ handleChangeQty }
          handleCheckout={ handleCheckout }
        />
      </main>
    </>
  );
}