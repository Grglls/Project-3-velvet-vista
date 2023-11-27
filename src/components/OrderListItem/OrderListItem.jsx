import "./OrderListItem.css";

const OrderListItem = ({order, activeOrder, setActiveOrder}) => {
    const { _id, orderId, updatedAt, orderTotal, totalQty } = order;
    return (
        <div onClick={() => setActiveOrder(_id)} className={ _id === activeOrder ? 'OrderListItem selected' : 'OrderListItem' }>
            <div>
                <div>Order Id: <span className="smaller">{ orderId }</span></div>
                <div className="smaller">{ new Date(updatedAt).toLocaleDateString() }</div>
            </div>
            <div className="align-rt">
                <div>${ orderTotal.toFixed(2) }</div>
                <div className="smaller">{ totalQty } Items</div>
            </div>
        </div>
    );
};

export default OrderListItem;