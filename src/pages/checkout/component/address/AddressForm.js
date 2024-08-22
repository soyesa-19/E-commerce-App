import { useState } from "react";
import Backdrop from "../HOC/Backdrop";
import { ConsoleSqlOutlined } from "@ant-design/icons";

const AddressForm = ({
  setShowFormModal,
  setSelectedAddress,
  setAdressList,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    address: "",
    contact: "",
  });

  const onChangeHandler = (e, flag) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, [flag]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const prev = JSON.parse(localStorage.getItem("addresses"));

    prev.push({
      name: formData.name,
      type: formData.type,
      address: formData.address,
      contact: formData.contact,
      id: 8,
    });
    localStorage.setItem("addresses", JSON.stringify(prev));
    setSelectedAddress(formData);
    setAdressList(prev);
  };
  return (
    <Backdrop setShowModal={setShowFormModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className=" overflow-y-scroll py-6 px-12 bg-white w-1/3 h-[600px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-250 "
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <p className=" text-brandDark text-base font-semibold">Add Address</p>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className=" text-brandDark text-base font-medium"
            >
              Cutomer's Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="py-3 px-4 border border-brandStroke rounded-md"
              value={formData.name}
              onChange={(e) => onChangeHandler(e, "name")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="type"
              className=" text-brandDark text-base font-medium"
            >
              Type
            </label>
            <input
              type="text"
              name="type"
              placeholder="Home or work"
              className="py-3 px-4 border border-brandStroke rounded-md"
              value={formData.type}
              onChange={(e) => onChangeHandler(e, "type")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="address"
              className=" text-brandDark text-base font-medium"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="py-3 px-4 border border-brandStroke rounded-md"
              value={formData.address}
              onChange={(e) => onChangeHandler(e, "address")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="cotact"
              className=" text-brandDark text-base font-medium"
            >
              Contact No
            </label>
            <input
              type="text"
              name="contact"
              placeholder="Enter your phone number"
              className="py-3 px-4 border border-brandStroke rounded-md"
              value={formData.contact}
              onChange={(e) => onChangeHandler(e, "contact")}
            />
          </div>
          <div className="flex gap-6 items-end justify-end">
            <button
              onClick={() => setShowFormModal(false)}
              className=" text-brandDark border border-brandDark py-3 px-8 rounded-lg "
            >
              Cancel
            </button>
            <button className=" text-brandDark bg-brandPrimary py-3 px-8 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Backdrop>
  );
};

export default AddressForm;
