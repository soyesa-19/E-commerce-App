import { StepHeader, Line } from "./Line";

const AddressDetails = ({ currentStep, onProceed }) => {
  return (
    <div className=" flex flex-col">
      <StepHeader
        step={1}
        currentStep={currentStep}
        title={"Delivery Address"}
      />
      <div className="flex flex-row gap-7 ml-5">
        <Line step={1} currentStep={currentStep} />
        <div className="pr-4 ">
          <div className="flex gap-2 items-center">
            <p className=" text-brandDark font-semibold text-base">
              Darshan Kumar
            </p>
            <div className=" rounded-md py-[5px] px-[14px] bg-brandGray3">
              Home
            </div>
          </div>
          <div className="w-[200px]">
            <p className=" text-brandTextPrimary text-base font-normal text-wrap">
              house no 35 , road no 2, east patel nagar, patna 800024, bihar
            </p>
          </div>
          <div className="flex flex-row gap-6 pt-4 pb-6">
            <button
              onClick={() => onProceed(1)}
              className=" bg-brandPrimary rounded-[4px] py-3 px-6 text-brandDark"
              disabled={currentStep > 1}
            >
              Proceed
            </button>
            <button className="border border-brandStroke rounded-[4px] py-3 px-6">
              Change Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
