import { useSelector } from "react-redux";
import WishListCard from "./WishListCard";

const WishList = () => {
  const wishlistItems = useSelector((store) => store.wishList.items);
  return (
    <div className="px-[108px]">
      <div className=" flex flex-row justify-between py-6 ">
        <p className=" text-brandDark text-base font-semibold">My WishList</p>
        <button className="border-none text-brandPrimary py-2">
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
