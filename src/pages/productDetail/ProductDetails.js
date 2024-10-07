import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
import { sendCartItem } from "../../store/cart-slice";
import {
  addWishListItem,
  removeWishListItem,
  sendWhishlistItem,
  deleteWhishlistItem,
} from "../../store/wishList-slice";
import { useAuth } from "../../context/auth/hooks/useAuth";
import { addBuyNowItems } from "../../store/buyNow-slice";
import useGetProductDetails from "./useGetProductDetails";
import DetailsTable from "./components/DetailsTable";
import ButtonList from "./components/ButtonList";

const ProductDetails = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("productId");
  const [qty, setQty] = useState(1);

  const { data: prodDetail, isLoading, error } = useGetProductDetails(orderId);
  const inWishList = useSelector((store) =>
    store.wishList.items.some((item) => item.id === orderId)
  );
  const inCart = useSelector((store) =>
    store.cart.items.some((item) => item.id === orderId)
  );
  const dispatch = useDispatch();

  const handleCart = () => {
    if (isAuthenticated) {
      console.log(prodDetail);
      const { id, title, price, image, description } = prodDetail;
      dispatch(sendCartItem({ id, title, price, image, description, qty }));
    } else {
      login();
    }
  };

  const handleWishList = () => {
    if (isAuthenticated) {
      const { id, title, price, image, description } = prodDetail;
      if (inWishList) {
        dispatch(deleteWhishlistItem({ id, title, price, image, description }));
      } else {
        dispatch(sendWhishlistItem({ id, title, price, image, description }));
      }
    } else {
      login();
    }
  };

  const buyNowHandler = () => {
    if (isAuthenticated) {
      prodDetail.qty = qty;
      dispatch(
        addBuyNowItems({
          cartItems: [prodDetail],
          totalCartPrice: prodDetail?.price * prodDetail?.qty,
          totalQty: qty,
        })
      );
      navigate("/checkout");
    } else {
      login();
    }
  };

  return (
    <div className=" flex flex-col md:flex-row gap-14 mx-auto items-start justify-center p-3">
      <Image
        className=" shadow-md p-2"
        height={"600px"}
        width={"600px"}
        src={prodDetail?.image}
      />
      <div className="flex flex-col gap-8 max-w-[40%]">
        <div className=" flex flex-col gap-6 ">
          <p className=" text-3xl font-bold">{prodDetail?.title}</p>
          <div>
            <ShareAltOutlined />
          </div>
          <div>{prodDetail?.description}</div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-3">
              <p>Qty</p>
              <div className=" border border-brandStroke rounded-[5px]">
                <button
                  className="w-10 h-6 "
                  onClick={() => setQty((prev) => prev + 1)}
                >
                  +
                </button>
                <span className="w-10 h-6">{qty}</span>
                <button
                  className="w-10 h-6 "
                  onClick={() => setQty((prev) => prev - 1)}
                  disabled={qty === 1}
                >
                  -
                </button>
              </div>
            </div>
            <p>₹{prodDetail?.price}</p>
          </div>
          <ButtonList
            inWishList={inWishList}
            buyNowHandler={buyNowHandler}
            handleWishList={handleWishList}
            handleCart={handleCart}
            inCart={inCart}
          />
        </div>
        <DetailsTable
          title="Product Details"
          brand="suyash International"
          seller="sinha Enterprises"
          policy="30 day return"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
