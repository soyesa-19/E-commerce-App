import CartList from "./CartList";
import OrderSummary from "../../components/OrderSummary";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBuyNowItems } from "../../store/buyNow-slice";
import { fetchCartItems } from "../../store/cart-slice";
import { useEffect } from "react";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    items: cartItems,
    totalQty,
    totalPrice: totalCartPrice,
  } = useSelector((store) => store.cart);
  console.log(cartItems);

  const buyNowHandler = () => {
    dispatch(addBuyNowItems({ cartItems, totalCartPrice, totalQty }));
    navigate("/checkout");
  };

  return (
    <div className="flex flex-row gap-10 justify-center items-start my-7">
      <CartList cartItems={cartItems} />
      <OrderSummary
        totalPrice={totalCartPrice}
        totalQty={totalQty}
        buyNowHandler={buyNowHandler}
      />
    </div>
  );
};

export default CartPage;
