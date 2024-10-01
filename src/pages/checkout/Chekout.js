import { useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../../components/OrderSummary";
import Orderdetails from "./OrderDetails";
import api from "../../services/axios/http";

const REACT_APP_STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY;

const Chekout = () => {
  const { totalPrice, items, totalQty } = useSelector((store) => store.buyNow);
  const navigate = useNavigate();
  const [paymentType, setPaymentType] = useState("");

  const buyNowHandler = async () => {
    if (!paymentType) {
      return alert("please select payment type");
    }
    const stripe = await loadStripe(REACT_APP_STRIPE_KEY);
    if (paymentType === "Stripe") {
      try {
        const response = await api.post("/api/payments/stripe", {
          params: {
            products: items,
          },
        });
        console.log(response);
        if (response.status === 201) {
          const result = stripe.redirectToCheckout({
            sessionId: response?.data?.id,
          });
          console.log(result);
        }
      } catch (error) {
        alert(error?.message);
        console.log(error);
      }
    } else {
      navigate("/payment/success");
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
