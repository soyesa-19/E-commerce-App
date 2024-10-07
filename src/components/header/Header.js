import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/auth/hooks/useAuth";
import Category from "./Category";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import LOGO from "../../assets/images/logo.jpeg";

const Header = () => {
  const { t } = useTranslation("header");
  const { isAuthenticated, logout } = useAuth();
  const [showDropDown, setShowDropDown] = useState(false);
  const totalQty = useSelector((store) => store.cart.totalQty);
  const wishListQty = useSelector((store) => store.wishList.qty);

  const [authLoading, setAuthLoading] = useState(false);

  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full z-50 flex flex-row  justify-between items-center h-[88px] px-[108px] bg-brandWhite ">
        <Link to={"/"}>
          <img src={LOGO} alt="Logo" />
        </Link>
        <div className=" flex flex-row  justify-center items-center gap-8">
          {isAuthenticated ? (
            <>
              <p>
                {
                  JSON.parse(localStorage.getItem("okta-token-storage"))
                    ?.idToken?.claims?.email
                }
              </p>
              <NavLink to={"/cart"}>
                {({ isActive }) => {
                  return (
                    <div
                      className={`relative p-1 ${
                        isActive
                          ? " border border-l-0 border-r-0 border-t-0 border-b-2 border-b-brandPrimary"
                          : ""
                      }`}
                    >
                      <ShoppingCartOutlined className=" text-2xl" />
                      {totalQty > 0 && (
                        <span className=" absolute -top-1 -right-[5px] text-brandWhite text-xs font-normal bg-brandPrimary h-4 w-4 rounded-full flex items-center justify-center">
                          {totalQty}
                        </span>
                      )}
                    </div>
                  );
                }}
              </NavLink>
              <NavLink to={"/wishlist"}>
                {({ isActive }) => {
                  return (
                    <div
                      className={`relative p-1 ${
                        isActive
                          ? " border border-l-0 border-r-0 border-t-0 border-b-2 border-b-brandPrimary"
                          : ""
                      }`}
                    >
                      <HeartOutlined className=" text-2xl" />
                      {wishListQty > 0 && (
                        <span className=" absolute -top-1 -right-[5px] text-brandWhite text-xs font-normal bg-brandPrimary h-4 w-4 rounded-full flex items-center justify-center">
                          {wishListQty}
                        </span>
                      )}
                    </div>
                  );
                }}
              </NavLink>
              <button onClick={logout}>Logout</button>
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
      </div>
      <div className="mt-[90px]">
        <Category />
      </div>
    </div>
  );
};
export default Header;
