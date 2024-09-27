import { Link } from "react-router-dom";
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
    const { id, title, image, price, description } = prodDetail;
    dispatch(sendCartItem({ id, title, image, price, description }));
  };

  const moveToWishList = ({
    id,
    title,
    price,
    image,
    totalPrice,
    description,
  }) => {
    const inWishList = wishList.some((item) => item.id === id);
    if (inWishList) {
      alert("item already in wishlist");
    } else {
      dispatch(removeItemFromCart({ id, title, price, image, totalPrice }));
      dispatch(sendWhishlistItem({ id, title, price, image, description }));
    }
  };

  return (
    <div className=" flex flex-col gap-6">
      {cartItems?.map((item) => {
        return (
          <div key={item.id} className="flex flex-row gap-5 items-center pr-8">
            <Link to={`/productDetails?productId=${item.id}`}>
              <img src={item.image} className="w-[312px] h-[312px]" />
            </Link>
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
              <p className="text-brandDark text-base font-semibold">
                ₹{item.qty * item.price}{" "}
                {item.qty > 1 && (
                  <span className=" text-brandTextPrimary text-base font-normal">
                    (₹{item.price}/item)
                  </span>
                )}
              </p>
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
