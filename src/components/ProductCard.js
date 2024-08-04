import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cart-slice";
import { useNavigate } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useSelection from "antd/es/table/hooks/useSelection";
import { addWishListItem, removeWishListItem } from "../store/wishList-slice";

const ProductCard = ({ title, image, description, price, rating, id }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const inWishList = useSelector((store) =>
    store.wishList.items.some((item) => item.id === id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishlistHandler = () => {
    if (inWishList) {
      dispatch(removeWishListItem({ id }));
    } else {
      dispatch(addWishListItem({ id, title, image, price }));
    }
  };

  const toggleDescription = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  const cartHandler = () => {
    dispatch(addItem({ id, price, title }));
  };

  return (
    <div className=" w-[392px] h-[526px] flex flex-col gap-6">
      <img
        onClick={() => navigate(`/productDetails?productId=${id}`)}
        src={image}
        className=" w-full h-[390px] shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]"
      />
      <div className=" w-full flex flex-row gap-4 justify-between items-start">
        <div
          className="flex flex-col gap-2 "
          onClick={() => navigate(`/productDetails?productId=${id}`)}
        >
          <p className=" text-brandDark text-[24px] leading-[30px] font-semibold">
            {title.substring(0, 22)}...
          </p>
          <p className=" text-brandDark text-[18px] leading-[26px] font-normal">
            {price}
          </p>
          <p className=" text-brandTextPrimary text-base font-light">
            {description?.substring(0, 40)}...
          </p>
        </div>
        <button
          onClick={wishlistHandler}
          className={`${inWishList ? "bg-brandRed" : ""}`}
        >
          <HeartOutlined />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
