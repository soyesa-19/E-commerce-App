export const StepHeader = ({ step, title, currentStep }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div
        className={`h-[40px] w-[40px] rounded-full ${
          step < currentStep ? "bg-brandPrimary" : ""
        } border border-brandPrimary flex items-center`}
      >
        <span className={`mx-auto ${step < currentStep && "text-white"}`}>
          {step}
        </span>
      </div>
      <p className="text-brandDark text-base font-semibold">{title}</p>
    </div>
  );
};

export const Line = ({ step, currentStep }) => {
  return (
    <div
      className={` ${
        step < currentStep ? "flex-y-grow" : " invisible"
      }  border border-brandPrimary`}
    ></div>
  );
};
