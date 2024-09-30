import { useSelector } from "react-redux";
import OrderSummary from "../../components/OrderSummary";
import Orderdetails from "./OrderDetails";
import { useState } from "react";
import api from "../../services/axios/http";

const Chekout = () => {
  const { totalPrice, items, totalQty } = useSelector((store) => store.buyNow);
  const [paymentType, setPaymentType] = useState("");

  const buyNowHandler = async () => {
    if (paymentType === "Stripe") {
      try {
        const response = await api.post("/api/payments/stripe", {
          params: {
            products: items,
          },
        });
        console.log(response);
        if (response.status === 201) {
          alert("ok");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          buyNowHandler={buyNowHandler}
        />
      </div>
    </div>
  );
};

export default Chekout;
