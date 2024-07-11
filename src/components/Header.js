import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation("header");
  const totalQty = useSelector((store) => store.cart.totalQty);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "cyan",
      }}
    >
      <Link to={"/"}>
        <h4>{t("Welcome")}</h4>
      </Link>
      <Link to={"/checkout"}>
        <span>{totalQty}</span>
        <ShoppingCartIcon />
      </Link>
      <Link to={"/logout"}>
        <ShoppingCartIcon />
      </Link>
    </div>
  );
};
export default Header;
