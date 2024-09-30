import { useSelector } from "react-redux";
import OrderSummary from "../../components/OrderSummary";
import Orderdetails from "./OrderDetails";
import { useState } from "react";

const Chekout = () => {
  const { totalPrice, items, totalQty } = useSelector((store) => store.buyNow);
  const [paymentType, setPaymentType] = useState("");
  return (
    <div className="flex flex-row justify-center mx-auto gap-7 mb-8">
      {/* first block */}
      <Orderdetails
        paymentType={paymentType}
        setPaymentType={setPaymentType}
        prodDetails={items}
        totalPrice={totalPrice}
        totalQty={totalQty}
      />
      {/* secound block */}
      <div className=" w-[602px]">
        <OrderSummary
          totalPrice={totalPrice}
          totalQty={items.length}
          paymentType={paymentType}
          setPaymenttype={setPaymentType}
        />
      </div>
    </div>
  );
};

export default Chekout;
