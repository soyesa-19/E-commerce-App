import { useState } from "react";
import { StepHeader, Line } from "../../Line";
import AddressModal from "./AddressModal";
import AddressForm from "./AddressForm";
import { useFetchAddresses } from "./hooks/useFetchAddresses";

const AddressDetails = ({ currentStep, onProceed }) => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  const { data: addressList, refetch } = useFetchAddresses();
  console.log(typeof addressList);
  const [selectedAddress, setSelectedAddress] = useState();
  const handleChangeAddress = () => {
    setShowAddressModal(true);
  };

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
          {selectedAddress && (
            <div className="flex gap-2 items-center">
              <p className=" text-brandDark font-semibold text-base">
                {selectedAddress?.customerName}
              </p>
              <div className=" rounded-md py-[5px] px-[14px] bg-brandGray3">
                {selectedAddress?.type}
              </div>
            </div>
          )}
          {selectedAddress && (
            <div className="w-[200px]">
              <p className=" text-brandTextPrimary text-base font-normal text-wrap">
                {selectedAddress?.address}
              </p>
              <p className=" text-brandTextPrimary text-base font-normal text-wrap">
                {selectedAddress?.contact}
              </p>
            </div>
          )}
          <div className="flex flex-row gap-6 pt-4 pb-6">
            <button
              onClick={() => onProceed(1)}
              className=" bg-brandPrimary rounded-[4px] py-3 px-6 text-brandDark disabled:bg-brandGray2"
              disabled={currentStep > 1 || !selectedAddress}
            >
              Proceed
            </button>
            <button
              onClick={handleChangeAddress}
              className="border border-brandStroke rounded-[4px] py-3 px-6"
            >
              {addressList?.length !== 0
                ? selectedAddress
                  ? "Change Address"
                  : "Select Address"
                : "Add address"}
            </button>
          </div>
        </div>
      </div>
      {showAddressModal && (
        <AddressModal
          addressList={addressList}
          setShowAddressModal={setShowAddressModal}
          setShowFormModal={setShowFormModal}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
        />
      )}
      {showFormModal && (
        <AddressForm
          setShowFormModal={setShowFormModal}
          setSelectedAddress={setSelectedAddress}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AddressDetails;
