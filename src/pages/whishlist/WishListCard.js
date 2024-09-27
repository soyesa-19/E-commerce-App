import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteWhishlistItem,
  sendWhishlistItem,
} from "../../store/wishList-slice";
import { ShareAltOutlined } from "@ant-design/icons";
import Delete from "../../assets/images/delete.jpeg";
import { sendCartItem } from "../../store/cart-slice";

const WishListCard = ({ item }) => {
  console.log(item);
  const { id, price, title, image, description } = item;
  const dispatch = useDispatch();
  const inCart = useSelector((store) =>
    store.cart.items.some((item) => item.id === id)
  );

  const deleteWishListItem = () => {
    dispatch(deleteWhishlistItem(item));
  };

  const moveToCart = () => {
    if (inCart) {
      alert("Item already present in cart");
    } else {
      dispatch(deleteWhishlistItem(item));
      dispatch(sendCartItem(item));
    }
  };

  return (
    <div className="flex flex-row items-center py-8 border border-solid border-t-0 border-x-0 border-b-brandStroke justify-between">
      <Link to={`/productDetails?productId=${id}`}>
        <div className="w-[560px] flex flex-row gap-4">
          <img className="w-[96px] h-[96px]" src={image} alt="logo" />
          <div className="flex flex-col gap-1">
            <p className="text-brandDark text-base font-semibold">{title}</p>
            <p className="text-brandTextPrimary text-base font-normal">
              {description?.substring(0, 102)}...
            </p>
            <p className=" text-brandDark text-base font-semibold">₹{price}</p>
          </div>
        </div>
      </Link>
      <p className=" text-brandDark text-base font-medium">In stock</p>
      <button
        onClick={moveToCart}
        className=" text-brandDark border-none bg-brandPrimary rounded-lg py-[13px] px-8"
      >
        Move to cart
      </button>
      <button>
        <ShareAltOutlined />
      </button>
      <button onClick={deleteWishListItem}>
        <img src={Delete} />
      </button>
    </div>
  );
};

export default WishListCard;
