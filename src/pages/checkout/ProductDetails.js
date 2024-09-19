import { useSelector } from "react-redux";
import { StepHeader } from "./Line";

const ProductDetails = ({ currentStep }) => {
  const prodDetails = useSelector((store) => store.buyNow.items);
  console.log(prodDetails);
  return (
    <div>
      <StepHeader
        step={3}
        currentStep={currentStep}
        title={"Items and Delivery"}
      />
      {prodDetails?.map(({ title, price, image }) => {
        return (
          <div className="flex flex-row gap-10 pl-5 ml-10 my-4 items-center">
            <img className="h-[200px] w-[200px]" src={image} alt="image" />
            <div className="flex flex-col gap-4">
              <p className="text-brandDark text-base font-semibold">{title}</p>
              <p className="text-brandTextPrimary font-normal text-sm">
                {price}
              </p>
              <p className="text-brandDark font-light">In stock</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetails;
