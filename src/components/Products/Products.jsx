import "./Products.css";
import ProductItem from "../ProductItem/ProductItem";
import Product1Image from "../../assets/images/1.jpg";
import Product2Image from "../../assets/images/2.jpg";
import Product3Image from "../../assets/images/3.jpg";

function Products({activeCat, menuItems, setCart}) {
  // console.log(menuItems);
  
  const items = menuItems.map((item) => 
    <ProductItem 
      key={item._id} 
      productItem={item} 
      setCart={setCart}
    />
  );

  console.log(setCart);

  return (
    <section id="Product">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">Category Name</h2>
        </div>
        <div className="row">
          {items}
        </div>
      </div>
    </section>
  );
}
export default Products;
