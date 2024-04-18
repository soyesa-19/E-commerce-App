import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQty = useSelector((store) => store.cart.totalQty);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        margin: "20px",
        backgroundColor: "cyan",
      }}
    >
      <Link to={"/"}>
        <h4>THBS</h4>
      </Link>
      <Link to={"cart"}>
        <span>{totalQty}</span>
        <ShoppingCartIcon />
      </Link>
    </div>
  );
};
export default Header;
