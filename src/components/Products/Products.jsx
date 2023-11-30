import "./Products.css";
import ProductItem from "../ProductItem/ProductItem";

function Products({activeCat, menuItems, setCart}) {
  
  const items = menuItems.map((item) => 
    <ProductItem 
      key={item._id} 
      productItem={item} 
      setCart={setCart}
    />
  );

  return (
    <section id="Product">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">{activeCat}</h2>
        </div>
        <div className="row">
          {items}
        </div>
      </div>
    </section>
  );
}
export default Products;
