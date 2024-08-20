import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const ButtonList = ({
  handleCart,
  inCart,
  buyNowHandler,
  handleWishList,
  inWishList,
}) => {
  return (
    <div className="flex flex-row gap-4 w-full">
      <button
        onClick={handleCart}
        disabled={inCart}
        className=" flex-grow rounded-lg py-[13px] px-[32px] bg-brandPrimary text-brandDark"
      >
        {inCart ? "In cart" : " Add to cart"}
      </button>
      <button
        onClick={buyNowHandler}
        className=" flex-grow rounded-lg py-[13px] px-[32px] text-brandDark border border-brandDark"
      >
        Buy Now
      </button>
      <button
        onClick={handleWishList}
        className={`rounded-lg py-3 px-auto border border-brandDark w-12 h-12 `}
      >
        {inWishList ? (
          <HeartFilled className="text-brandRed text-lg" />
        ) : (
          <HeartOutlined className="text-lg" />
        )}
      </button>
    </div>
  );
};

export default ButtonList;
