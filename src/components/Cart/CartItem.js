import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/cart-slice";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const additemHandler = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
      })
    );
  };

  const removeitemHandler = () => {
    dispatch(removeItem({ id: id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h5>{title}</h5>
        <div className={classes.price}>
          {total}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeitemHandler}>-</button>
          <button onClick={additemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
