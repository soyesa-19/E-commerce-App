import { useSelector } from "react-redux";
import { StepHeader } from "./Line";

const ProductDetails = ({ currentStep, prodDetails, totalPrice, totalQty }) => {
  console.log(prodDetails, totalPrice, totalQty);
  return (
    <div>
      <StepHeader
        step={3}
        currentStep={currentStep}
        title={"Items and Delivery"}
      />
      {prodDetails?.map(({ title, price, image, qty }) => {
        return (
          <div className="flex flex-row gap-10 pl-5 ml-10 my-4 items-center">
            <img className="h-[200px] w-[200px]" src={image} alt="image" />
            <div className="flex flex-col gap-4">
              <p className="text-brandDark text-base font-semibold">{title}</p>
              <p className="text-brandDark font-normal text-md">
                ₹{price * qty}{" "}
                {qty > 1 && (
                  <span className=" text-brandTextPrimary font-light text-sm">
                    ({price}/item)
                  </span>
                )}
              </p>
              <p className="text-brandDark font-light">In stock</p>
              <p className="text-brandDark font-light">QTY: {qty}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetails;
