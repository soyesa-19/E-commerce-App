const CartList = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className=" flex flex-col gap-6">
      {cartItems?.map((item) => {
        return (
          <div className="flex flex-row gap-5 items-center pr-8">
            <img src={item.image} className="w-[312px] h-[312px]" />
            <div className="flex flex-col gap-4">
              <p className=" text-brandDark font-semibold text-[18px] leading-[26px]">
                {item.name}
              </p>
              <p>in stock</p>
              <p>QTY: {item?.qty}</p>
              <p>{item.price}</p>
              <div>
                <button className=" border border-brandDark py-2 px-6 rounded-md">
                  Remove
                </button>
                <button className=" border-none text-brandPrimary py-2 px-6">
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
