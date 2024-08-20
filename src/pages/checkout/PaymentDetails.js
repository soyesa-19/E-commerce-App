import { StepHeader, Line } from "./Line";

const PaymentDetails = ({
  currentStep,
  onProceed,
  paymentType,
  setPaymentType,
}) => {
  const onChangeHandler = (value) => {
    onProceed(2);
    setPaymentType(value);
  };
  return (
    <div>
      <StepHeader
        step={2}
        title={"Payment Details"}
        currentStep={currentStep}
      />
      <div className="flex flex-row gap-7 ml-5">
        <Line step={2} currentStep={currentStep} />
        <div className="flex flex-col gap-3 pb-4">
          <div
            className="flex flex-row gap-2 items-center
        "
          >
            <input
              type="radio"
              name="stripe"
              value="Stripe"
              className=" text-brandPrimary"
              checked={paymentType === "Stripe"}
              onClick={() => onChangeHandler("Stripe")}
            />
            <label htmlFor="Stripe">Stripe</label>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input
              type="radio"
              name="cod"
              value="cod"
              checked={paymentType === "cod"}
              onClick={() => onChangeHandler("cod")}
            />
            <label htmlFor="Stripe">COD</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
