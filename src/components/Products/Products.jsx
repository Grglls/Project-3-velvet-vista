import "./Products.css";
import ProductItem from "../ProductItem/ProductItem";
import Product1Image from "../../assets/images/1.jpg";
import Product2Image from "../../assets/images/2.jpg";
import Product3Image from "../../assets/images/3.jpg";

function Products({activeCat, menuItems, handleAddToOrder}) {
  // let Products = [
  //   {
  //     ProductImage: Product1Image,
  //     ProductTitle: "Lucia Linen Dress",
  //     ProductDesc:
  //       "Flaunting tonal teals and blues within a floral print.",
  //     Productsize: "M",
  //     Productprice: 279,
  //   },
  //   {
  //     ProductImage: Product2Image,
  //     ProductTitle: "Morley Mini Dress",
  //     ProductDesc: "Utterly effervescent in a pale shade of champagne.",
  //     Productsize: "L",
  //     Productprice: 229,
  //   },
  //   {
  //     ProductImage: Product3Image,
  //     ProductTitle: "Shae Silk Dress",
  //     ProductDesc:
  //       "Slipping over the skin to create a silhouette.",
  //     Productsize: "L",
  //     Productprice: 299,
  //   },
  // ];

  // menuItems={menuItems.filter(item => item.category.name === activeCat)};
  console.log(menuItems);
  
  const items = menuItems.map((item) => <ProductItem key={item._id} productItem={item} handleAddToOrder={handleAddToOrder}/>)

  return (
    <section id="Product">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">Category Name</h2>
        </div>
        <div className="row">
          {items}
          {/* <ProductItem {...Products[0]} />
          <ProductItem {...Products[1]} />
          <ProductItem {...Products[2]} /> */}
        </div>
      </div>
    </section>
  );
}
export default Products;
