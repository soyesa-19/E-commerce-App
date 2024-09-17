import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useOktaAuth } from "@okta/okta-react";
import Category from "./Category";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import LOGO from "../../assets/images/logo.jpeg";
import { useEffect, useState } from "react";

const Header = () => {
  const { t } = useTranslation("header");
  const [showDropDown, setShowDropDown] = useState(false);
  const totalQty = useSelector((store) => store.cart.totalQty);
  const wishListQty = useSelector((store) => store.wishList.qty);

  const [authLoading, setAuthLoading] = useState(false);
  const { authState, oktaAuth } = useOktaAuth();
  console.log(authState);
  console.log(
    localStorage.getItem("okta-token-storage")?.idToken?.claims?.email
  );
  useEffect(() => {
    if (authState) {
      console.log(authState?.isAuthenticated);
      setAuthLoading(true);
    }
  }, [authState]);
  return (
    <div>
      <div className=" flex flex-row  justify-between items-center h-[88px] px-[108px] ">
        <Link to={"/"}>
          <img src={LOGO} alt="Logo" />
        </Link>
        {authState !== null && (
          <div className=" flex flex-row  justify-center items-center gap-8">
            {authState?.isAuthenticated ? (
              <>
                <p>
                  {
                    JSON.parse(localStorage.getItem("okta-token-storage"))
                      ?.idToken?.claims?.email
                  }
                </p>
                <Link to={"/cart"}>
                  <div className="relative">
                    <ShoppingCartOutlined className=" text-2xl" />
                    {totalQty > 0 && (
                      <span className=" absolute -top-2 -right-[10px] text-brandWhite text-xs font-normal bg-brandPrimary h-4 w-4 rounded-full flex items-center justify-center">
                        {totalQty}
                      </span>
                    )}
                  </div>
                </Link>
                <Link to={"/wishlist"}>
                  <div className=" relative">
                    <HeartOutlined className=" text-2xl" />
                    {wishListQty > 0 && (
                      <span className=" absolute -top-2 -right-[10px] text-brandWhite text-xs font-normal bg-brandPrimary h-4 w-4 rounded-full flex items-center justify-center">
                        {wishListQty}
                      </span>
                    )}
                  </div>
                </Link>
                <Link to={"/logout"}>
                  <p>Logout</p>
                </Link>
              </>
            ) : (
              <div
                className="relative"
                onMouseEnter={() => setShowDropDown(true)}
                onMouseLeave={() => setShowDropDown(false)}
              >
                <UserOutlined className=" text-2xl p-2" />
                {showDropDown && (
                  <div className=" absolute -left-2 border border-brandStroke rounded-lg flex flex-col gap-2 items-center justify-center before:content-[''] before:absolute before:-top-4 before:left-5 before:border-8 before:border-x-transparent before:border-t-transparent before:border-b-brandStroke ">
                    <Link to={"/signIn_redirect"}>
                      <button className=" bg-brandPrimary px-5 py-2 rounded-lg">
                        Login
                      </button>
                    </Link>
                    <Link to={"/signup_user"}>
                      <button>SignUp</button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <Category />
    </div>
  );
};
export default Header;
