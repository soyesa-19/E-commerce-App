import { useDispatch, useSelector } from "react-redux";
import { removeItem, addItem } from "../../store/cart-slice";
import { useEffect } from "react";
import { addWishListItem } from "../../store/wishList-slice";

const CartList = ({ cartItems }) => {
  const dispatch = useDispatch();
  const wishList = useSelector((store) => store.wishList.items);

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleAddToCart = (id, price, name, image) => {
    dispatch(addItem({ id, price, title: name, image }));
  };

  const moveToWishList = ({ id, title, price, image }) => {
    const inWishList = wishList.some((item) => item.id === id);
    if (inWishList) {
      alert("item already in wishlist");
    } else {
      dispatch(removeItem({ id }));
      dispatch(addWishListItem({ id, title, price, image }));
    }
  };

  return (
    <div className=" flex flex-col gap-6">
      {cartItems?.map((item) => {
        return (
          <div className="flex flex-row gap-5 items-center pr-8">
            <img src={item.image} className="w-[312px] h-[312px]" />
            <div className="flex flex-col gap-3">
              <p className=" text-brandDark font-semibold text-[18px] leading-[26px]">
                {item.title}
              </p>
              <p>in stock</p>
              <p>QTY: {item?.qty}</p>
              <div>
                <button
                  onClick={() =>
                    handleAddToCart(item.id, item.price, item.name, item.image)
                  }
                  className="rounded-l-md rounded-r-none border border-brandStroke w-8 h-8"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="rounded-r-md rounded-l-none border border-brandStroke w-8 h-8"
                >
                  -
                </button>
              </div>
              <p>${item.price}</p>
              <div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className=" border border-brandDark py-2 px-6 rounded-md"
                >
                  Remove
                </button>
                <button
                  onClick={() => moveToWishList(item)}
                  className=" border-none text-brandPrimary py-2 px-6"
                >
                  Move to whishist
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
