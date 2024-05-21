const ProductDetails = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("orderId");
  return <div>{orderId}</div>;
};

export default ProductDetails;
