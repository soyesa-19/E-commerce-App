import { useState } from "react";
import Backdrop from "../HOC/Backdrop";
import { useFormik } from "formik";
import Input from "../../../../components/InputContainer/Input";
import api from "../../../../services/axios/http";

const AddressForm = ({ setShowFormModal, setSelectedAddress, refetch }) => {
  const validate = (values) => {
    let errors = {};

    if (!values.customerName) {
      errors.customerName = "Required*";
    } else if (values.customerName.length > 16) {
      errors.customerName = "Customer name should be less than 15 characters";
    }

    if (!values.addressType) {
      errors.addressType = "Required";
    }

    if (!values.building) {
      errors.building = "Reqiured";
    } else if (values.building.length > 15) {
      errors.building = "Building name should be less than 10 character";
    }

    if (!values.city) {
      errors.city = "Required";
    } else if (!/^[A-Za-z]+$/.test(values.city)) {
      errors.city = "Enter valid city name";
    }

    if (!values.state) {
      errors.state = "Required";
    } else if (!/^[A-Za-z]+$/.test(values.state)) {
      errors.state = "Enter valid city name";
    }

    if (!values.pincode) {
      errors.pincode = "Required";
    } else {
      let isValidPincode = /^\d{6}$/.test(values.pincode);
      if (!isValidPincode) {
        errors.pincode = "Enter valid pincode";
      }
    }

    if (!values.contact) {
      errors.contact = "Required";
    } else if (values.contact.length !== 10) {
      errors.contact = "No should be of length 10";
    }
    return errors;
  };
  const handleFormSubmit = async (values) => {
    alert("hi");
    const response = await api.post("/api/addresses", {
      customerName: values.customerName,
      type: values.addressType,
      address: [
        values.building,
        values.street,
        values.pincode,
        values.city,
        values.state,
      ].join(" "),
      contact: values.contact,
    });

    if (response.status != 201) {
      return alert("couldt update backend");
    }

    await refetch();
    setShowFormModal(false);
  };
  const formik = useFormik({
    initialValues: {
      customerName: "",
      addressType: "",
      building: "",
      street: "",
      pincode: "",
      city: "",
      state: "",
      contact: "",
    },
    validate,
    onSubmit: handleFormSubmit,
  });

  return (
    <Backdrop setShowModal={setShowFormModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className=" overflow-y-scroll py-6 px-12 bg-white w-1/3 h-[600px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-250 "
      >
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
          <p className=" text-brandDark text-base font-semibold">Add Address</p>
          <Input
            type="text"
            name="customerName"
            id="customerName"
            placeholder="Enter your name"
            containerClass="flex flex-col gap-1"
            inputClass={`py-3 px-4 border border-brandStroke rounded-md ${
              formik.touched.customerName && formik.errors.customerName
                ? "border-brandRed"
                : "border-brandStroke"
            }`}
            label="Cutomer's Name"
            value={formik.values.customerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors}
            touched={formik.touched}
          />
          <Input
            type="text"
            name="addressType"
            id="addressType"
            placeholder="Home or work"
            containerClass="flex flex-col gap-1"
            inputClass={`py-3 px-4 border border-brandStroke rounded-md focus:!border-brandStroke ${
              formik.touched.addressType && formik.errors.addressType
                ? "border-brandRed"
                : "border-brandStroke"
            }`}
            label="Type"
            value={formik.values.addressType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors}
            touched={formik.touched}
          />
          <Input
            type="text"
            name="building"
            id="building"
            placeholder="Building no, Flat no"
            containerClass="flex flex-col gap-1"
            inputClass={`py-3 px-4 border border-brandStroke rounded-md focus:!border-brandStroke ${
              formik.touched.building && formik.errors.building
                ? "border-brandRed"
                : "border-brandStroke"
            }`}
            label="Flat/Building No"
            value={formik.values.building}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors}
            touched={formik.touched}
          />
          <Input
            type="text"
            name="street"
            id="street"
            placeholder="Area/Locality/Street"
            containerClass="flex flex-col gap-1"
            inputClass={`py-3 px-4 border border-brandStroke rounded-md focus:!border-brandStroke ${
              formik.touched.street && formik.errors.street
                ? "border-brandRed"
                : "border-brandStroke"
            }`}
            label="Area/Locality/Street"
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors}
            touched={formik.touched}
          />

          <Input
            type="text"
            name="pincode"
            id="pincode"
            placeholder="Enter your pincode"
            containerClass="flex flex-col gap-1"
            inputClass={`py-3 px-4 border border-brandStroke rounded-md focus:!border-brandStroke ${
              formik.touched.pincode && formik.errors.pincode
                ? "border-brandRed"
                : "border-brandStroke"
            }`}
            label="Pincode"
            value={formik.values.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors}
            touched={formik.touched}
          />

          <Input
            type="text"
            name="city"
            id="city"
            placeholder="Enter your city"
            containerClass="flex flex-col gap-1"
            inputClass={`py-3 px-4 border border-brandStroke rounded-md focus:!border-brandStroke ${
              formik.touched.city && formik.errors.city
                ? "border-brandRed"
                : "border-brandStroke"
            }`}
            label="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors}
            touched={formik.touched}
          />

          <Input
            type="text"
            name="state"
            id="state"
            placeholder="Enter your state"
            containerClass="flex flex-col gap-1"
            inputClass={`py-3 px-4 border border-brandStroke rounded-md focus:!border-brandStroke ${
              formik.touched.state && formik.errors.state
                ? "border-brandRed"
                : "border-brandStroke"
            }`}
            label="State"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors}
            touched={formik.touched}
          />

          <Input
            type="text"
            name="contact"
            id="contact"
            placeholder="Enter your Mobile no"
            containerClass="flex flex-col gap-1"
            inputClass={`py-3 px-4 border border-brandStroke rounded-md focus:!border-brandStroke ${
              formik.touched.state && formik.errors.state
                ? "border-brandRed"
                : "border-brandStroke"
            }`}
            label="Mobile"
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors}
            touched={formik.touched}
          />

          <div className="flex gap-6 items-end justify-end">
            <button
              onClick={() => setShowFormModal(false)}
              className=" text-brandDark border border-brandDark py-3 px-8 rounded-lg "
            >
              Cancel
            </button>
            <button
              disabled={
                formik?.errors?.addressType ||
                formik?.errors?.building ||
                formik?.errors?.city ||
                formik?.errors?.customerName ||
                formik?.errors?.pincode ||
                formik?.errors?.state ||
                formik?.errors?.contact ||
                formik?.errors?.street
              }
              className=" text-brandDark bg-brandPrimary py-3 px-8 rounded-lg disabled:bg-brandGray"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Backdrop>
  );
};

export default AddressForm;
