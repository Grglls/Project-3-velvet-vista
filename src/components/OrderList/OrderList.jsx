import OrderListItem from "../OrderListItem/OrderListItem";

const OrderList = ({orders, activeOrder, setActiveOrder}) => {
    return (
        <div>
            { orders.map((order) => <OrderListItem
                                        order={order} 
                                        activeOrder={activeOrder}
                                        setActiveOrder={setActiveOrder}
                                        key={order._id}
                                    />) }
        </div>
    );
}

export default OrderList;