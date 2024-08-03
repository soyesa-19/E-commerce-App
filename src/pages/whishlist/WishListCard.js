const WishListCard = ({ item }) => {
  const { id, price, title, image } = item;
  return (
    <div className="flex flex-row items-center py-8 border border-solid border-t-0 border-x-0 border-b-brandStroke justify-between">
      <div className="w-[560px] flex flex-row gap-4">
        <img className="w-[96px] h-[96px]" src={image} alt="logo" />
        <div className="flex flex-col gap-1">
          <p className="text-brandDark text-base font-semibold">{title}</p>
          <p className="text-brandTextPrimary text-base font-normal">
            description
          </p>
          <p className=" text-brandDark text-base font-semibold">{price}</p>
        </div>
      </div>
      <p className=" text-brandDark text-base font-medium">In stock</p>
      <button className=" text-brandDark border-none bg-brandPrimary rounded-lg py-[13px] px-8">
        Move to cart
      </button>
      <p>share</p>
      <p>delete</p>
    </div>
  );
};

export default WishListCard;
