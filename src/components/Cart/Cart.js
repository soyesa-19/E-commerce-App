import { useTranslation } from "react-i18next";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useTransition } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalCartPrice = useSelector((store) => store.cart.totalPrice);
  const { t } = useTranslation("cart");
  console.log(cartItems);
  return (
    <Card className={classes.cart}>
      <h2>{t("your_cart")}</h2>
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
      <p>{`${t("total_price")} : ${totalCartPrice}`}</p>
      <button
        onClick={() =>
          alert(
            "Caution: Earning in Rupees and spending in dollars not allowed. Happy shopping!! Bye"
          )
        }
      >
        {t("proceed_payment")}
      </button>
    </Card>
  );
};

export default Cart;
