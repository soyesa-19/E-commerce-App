import { useState } from "react";
import { StepHeader, Line } from "../../Line";
import AddressModal from "./AddressModal";
import AddressForm from "./AddressForm";

const addresses = [
  {
    id: 1,
    type: "home",
    name: "suyash sinha",
    address: "flat 301, shanti narayan appt, east patel nagar, patna -800023",
    contact: "9285425544",
  },
  {
    id: 2,
    type: "work",
    name: "suyash s sinha",
    address: "flat 301, shanti narayan appt, east patel nagar, patna -800023",
    contact: "88822367263",
  },
  {
    id: 3,
    type: "home",
    name: "piyush shukal",
    address: "flat 301, shanti narayan appt, east patel nagar, patna -800023",
    contact: "9285425544",
  },
  {
    id: 4,
    type: "work",
    name: "schundi",
    address: "flat 301, shanti narayan appt, east patel nagar, patna -800023",
    contact: "9285425544",
  },
  {
    id: 5,
    type: "home",
    name: "raghav",
    address: "flat 301, shanti narayan appt, east patel nagar, patna -800023",
    contact: "9285425544",
  },
  {
    id: 6,
    type: "home",
    name: "shalu",
    address: "flat 301, shanti narayan appt, east patel nagar, patna -800023",
    contact: "9285425544",
  },
];
localStorage.setItem("addresses", JSON.stringify(addresses));
const AddressDetails = ({ currentStep, onProceed }) => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [addressList, setAdressList] = useState(
    JSON.parse(localStorage.getItem("addresses")) || []
  );
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
          <div className="flex gap-2 items-center">
            <p className=" text-brandDark font-semibold text-base">
              {selectedAddress?.name}
            </p>
            <div className=" rounded-md py-[5px] px-[14px] bg-brandGray3">
              {selectedAddress?.type}
            </div>
          </div>
          <div className="w-[200px]">
            <p className=" text-brandTextPrimary text-base font-normal text-wrap">
              {selectedAddress?.address}
            </p>
            <p className=" text-brandTextPrimary text-base font-normal text-wrap">
              {selectedAddress?.contact}
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
            <button
              onClick={handleChangeAddress}
              className="border border-brandStroke rounded-[4px] py-3 px-6"
            >
              Change Address
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
        />
      )}
    </div>
  );
};

export default AddressDetails;
