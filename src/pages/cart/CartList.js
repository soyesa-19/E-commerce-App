import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  sendCartItem,
  removeItemFromCart,
} from "../../store/cart-slice";
import { addWishListItem, sendWhishlistItem } from "../../store/wishList-slice";

const CartList = ({ cartItems }) => {
  const dispatch = useDispatch();
  const wishList = useSelector((store) => store.wishList.items);

  const handleRemoveItem = (item) => {
    dispatch(removeItemFromCart(item));
  };

  const handleAddToCart = (prodDetail) => {
    dispatch(sendCartItem(prodDetail));
  };

  const moveToWishList = ({ id, title, price, image, totalPrice }) => {
    const inWishList = wishList.some((item) => item.id === id);
    if (inWishList) {
      alert("item already in wishlist");
    } else {
      dispatch(removeItemFromCart({ id, title, price, image, totalPrice }));
      dispatch(sendWhishlistItem({ id, title, price, image }));
    }
  };

  return (
    <div className=" flex flex-col gap-6">
      {cartItems?.map((item) => {
        return (
          <div key={item.id} className="flex flex-row gap-5 items-center pr-8">
            <img src={item.image} className="w-[312px] h-[312px]" />
            <div className="flex flex-col gap-3">
              <p className=" text-brandDark font-semibold text-[18px] leading-[26px]">
                {item.title}
              </p>
              <p>in stock</p>
              <p>QTY: {item?.qty}</p>
              <div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="rounded-l-md rounded-r-none border border-brandStroke w-8 h-8"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="rounded-r-md rounded-l-none border border-brandStroke w-8 h-8"
                >
                  -
                </button>
              </div>
              <p>${item.qty * item.price}</p>
              <div>
                <button
                  onClick={() => handleRemoveItem(item)}
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
