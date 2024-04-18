import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/cart-slice";
import { useSelector } from "react-redux/es/hooks/useSelector";

const CartButton = (props) => {
  const totalqty = useSelector((store) => store.cart.totalQty);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };
  return (
    <button onClick={handleToggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalqty}</span>
    </button>
  );
};

export default CartButton;
