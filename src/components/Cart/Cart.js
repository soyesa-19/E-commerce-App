import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalCartPrice = useSelector((store) => store.cart.totalPrice);
  console.log(cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={{
                title: item.name,
                quantity: item.qty,
                total: item.totalPrice,
                price: item.price,
                id: item.id,
              }}
            />
          );
        })}
      </ul>
      <p>Total Price : {totalCartPrice}</p>
      <button
        onClick={() =>
          alert(
            "Caution: Earning in Rupees and spending in dollars not allowed. Happy shopping!! Bye"
          )
        }
      >
        Proceed to Pay
      </button>
    </Card>
  );
};

export default Cart;
