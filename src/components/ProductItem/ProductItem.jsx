import * as ordersAPI from '../../utilities/orders-api';

function ProductItem({productItem, setCart}) {
  // console.log(productItem);

  // console.log('product item', handleAddToOrder);

  async function handleAddToOrder(itemId) {
    const cart = await ordersAPI.addItemToCart(itemId);
    setCart(cart);
    console.log(cart);
  }




  return (
    <div className="col-4">
      <div className="Product-box">
        <div className="Product-img">
          <img src={productItem.image} className="img-fluid" />
        </div>
        <div className="Product-content">
          <h3 className="Product-title">{productItem.name}</h3>
          {/* <p className="Product-desc">{props.ProductDesc}</p> */}
        </div>
        <div className="Product-footer">
          <div className="post-size">
            <p className="size">{productItem.size}</p>
          </div>
          <div>
            <span>$ {productItem.price}</span> 
          </div>
          <button className="btn-sm" onClick={() => handleAddToOrder(productItem._id)}>
          ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
