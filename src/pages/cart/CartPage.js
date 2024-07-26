import CartList from "./CartList";
import CartOrderSummary from "./CartOrderSummary";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalCartPrice = useSelector((store) => store.cart.totalPrice);
  const totalQty = useSelector((store) => store.cart.totalQty);
  console.log(totalCartPrice, totalQty);
  return (
    <div className="flex flex-row gap-10 justify-center items-start my-7">
      <CartList cartItems={cartItems} />
      <CartOrderSummary totalPrice={totalCartPrice} totalQty={totalQty} />
    </div>
  );
};

export default CartPage;
