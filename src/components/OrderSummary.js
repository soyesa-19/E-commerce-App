const OrderSummary = ({ totalPrice, totalQty, buyNowHandler }) => {
  return (
    <div className="flex flex-col gap-6 w-[496px]">
      <div className=" border border-brandStroke rounded-lg">
        <div className=" py-4 px-[10px] bg-brandGray2">
          Order Summary {totalQty}
        </div>
        <div className="flex flex-col gap-2 p-8 ">
          <div className="flex justify-between">
            <p className=" text-brandTextPrimary text-base font-normal">
              Item Total
            </p>
            <p className=" text-brandTextPrimary text-base font-normal">
              {totalPrice}
            </p>
          </div>
          <div className="flex justify-between border border-solid border-x-0 border-t-0 border-b-brandStroke">
            <p className=" text-brandTextPrimary text-base font-normal">
              Discount
            </p>
            <p className=" text-brandTextPrimary text-base font-normal">0</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className=" text-brandTextPrimary text-base font-normal">
                Grand Total
              </p>
              <p className=" text-brandTextPrimary text-base font-normal">
                Inclusive of all taxes
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-brandTextPrimary text-base font-normal">
                {totalPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={buyNowHandler}
        className="w-full bg-brandPrimary text-brandDark py-[13px] px-8 rounded-lg"
      >
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
