import { useState } from "react";
import ProductDetails from "./ProductDetails";
import AddressDetails from "./component/address/AddressDetails";
import PaymentDetails from "./PaymentDetails";

const Orderdetails = ({
  paymentType,
  setPaymentType,
  prodDetails,
  totalPrice,
  totalQty,
  selectedAddress,
  setSelectedAddress,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const onProceed = (step) => {
    setCurrentStep(step + 1);
  };

  return (
    <div className="flex flex-col w-[600px]">
      <AddressDetails
        currentStep={currentStep}
        onProceed={onProceed}
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
      />

      <PaymentDetails
        currentStep={currentStep}
        paymentType={paymentType}
        setPaymentType={setPaymentType}
        onProceed={onProceed}
      />

      <ProductDetails
        currentStep={currentStep}
        prodDetails={prodDetails}
        totalPrice={totalPrice}
        totalQty={totalQty}
      />
      <div className="flex flex-row gap-[17px] my-5">
        <button className=" bg-brandPrimary text-brandDark py-[13px] px-8 rounded-lg">
          Checkout
        </button>
        <button className=" border border-brandStroke text-brandDark py-[13px] px-8 rounded-lg">
          Back
        </button>
      </div>
    </div>
  );
};

export default Orderdetails;
