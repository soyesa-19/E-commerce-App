import Backdrop from "../HOC/Backdrop";
import AddressCard from "./AddressCard";
const AddressModal = ({
  setShowAddressModal,
  addressList,
  selectedAddress,
  setSelectedAddress,
  setShowFormModal,
}) => {
  console.log(addressList);
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  return (
    <Backdrop setShowModal={setShowAddressModal}>
      <div
        onClick={handleModalClick}
        className=" overflow-y-scroll w-3/4 h-[500px] bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-150"
      >
        <div className="py-6 px-8 flex flex-row justify-between w-full items-center border border-solid border-x-0 border-t-0 border-b-brandStroke">
          <p className=" text-brandDark text-base font-semibold">
            Your Addresses
          </p>
          <button
            onClick={() => setShowFormModal(true)}
            className=" bg-brandPrimary text-brandDark rounded-lg py-3 px-8"
          >
            + Add Address
          </button>
        </div>
        <div className="py-2 px-8 flex flex-row gap-5 flex-wrap justify-center">
          {addressList?.map(({ id, name, address, type, contact }) => {
            return (
              <AddressCard
                id={id}
                name={name}
                type={type}
                contact={contact}
                address={address}
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
              />
            );
          })}
        </div>
      </div>
    </Backdrop>
  );
};

export default AddressModal;
