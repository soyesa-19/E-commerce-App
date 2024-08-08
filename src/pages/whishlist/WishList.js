import { useDispatch, useSelector } from "react-redux";
import WishListCard from "./WishListCard";
import { clearWishlist } from "../../store/wishList-slice";

const WishList = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((store) => store.wishList.items);

  const clearWishlistItems = () => {
    dispatch(clearWishlist());
  };
  return (
    <div className="px-[108px]">
      <div className=" flex flex-row justify-between py-6 ">
        <p className=" text-brandDark text-base font-semibold">My WishList</p>
        <button
          onClick={clearWishlistItems}
          className="border-none text-brandPrimary py-2"
        >
          Clear WishList
        </button>
      </div>
      {wishlistItems?.map((item) => (
        <WishListCard item={item} />
      ))}
    </div>
  );
};

export default WishList;
