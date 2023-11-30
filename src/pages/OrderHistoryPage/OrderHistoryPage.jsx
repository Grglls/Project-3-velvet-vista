import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

import * as ordersAPI from '../../utilities/orders-api';

export default function OrderHistoryPage({user, setUser}) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(() => {
    const getOrderHistory = async () => {
      const orderHistory = await ordersAPI.orderHistory();
      setOrders(orderHistory);
      if (orderHistory.length) {
        setActiveOrder(orderHistory[0]._id);
      }
    }
  
    getOrderHistory();
  }, []);

  const currentOrder = orders.find((order) => order._id === activeOrder);

  return (
    <>
      <main className="NewOrderPage">
        <aside>
          <Logo />
          <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        </aside>
        <OrderList orders={ orders } activeOrder={ activeOrder } setActiveOrder={ setActiveOrder } />
        <OrderDetail order={ currentOrder } />
      </main>
    </>
  );
}