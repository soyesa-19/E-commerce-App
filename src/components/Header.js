import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useOktaAuth } from "@okta/okta-react";
import Category from "./Category";

const Header = () => {
  const { t } = useTranslation("header");
  const totalQty = useSelector((store) => store.cart.totalQty);
  const wishListQty = useSelector((store) => store.wishList.qty);

  const { authState, oktaAuth } = useOktaAuth();
  console.log(
    localStorage.getItem("okta-token-storage")?.idToken?.claims?.email
  );
  return (
    <div>
      <div className=" flex flex-row  justify-between items-center h-[88px] px-[108px] ">
        <Link to={"/"}>
          <h4>{t("Welcome")}</h4>
        </Link>
        <div className=" flex flex-row  justify-center gap-8">
          {authState?.isAuthenticated ? (
            <>
              <p>
                {
                  JSON.parse(localStorage.getItem("okta-token-storage"))
                    ?.idToken?.claims?.email
                }
              </p>
              <Link to={"/cart"}>
                <span>{totalQty}</span>
                <ShoppingCartIcon />
              </Link>
              <Link to={"/wishlist"}>
                <p>
                  <span>{wishListQty}</span>Wishlist
                </p>
              </Link>
              <Link to={"/logout"}>
                <p>Logout</p>
              </Link>
            </>
          ) : (
            <Link to={"/signIn_redirect"}>
              <p>LogIn</p>
            </Link>
          )}
        </div>
      </div>
      <Category />
    </div>
  );
};
export default Header;
