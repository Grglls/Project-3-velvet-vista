function ProductItem(props) {
  return (
    <div className="col-4">
      <div className="Product-box">
        <div className="Product-img">
          <img src={props.ProductImage} className="img-fluid" />
        </div>
        <div className="Product-content">
          <h3 className="Product-title">{props.ProductTitle}</h3>
          <p className="Product-desc">{props.ProductDesc}</p>
        </div>
        <div className="Product-footer">
          <div className="post-size">
            <p className="size">{props.Productsize}</p>
          </div>
          <div>
            <span></span> {props.Productprice} $
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
