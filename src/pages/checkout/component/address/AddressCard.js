import { DeleteColumnOutlined } from "@ant-design/icons";
import Delete from "../../../../assets/images/delete.jpeg";

const AddressCard = ({
  id,
  type,
  name,
  address,
  contact,
  selectedAddress,
  setSelectedAddress,
}) => {
  return (
    <div className="border border-brandStroke rounded-md w-[320px] ">
      <div className=" flex flex-row gap-3 items-center bg-brandGray py-4 px-[10px] border border-solid border-x-0 border-t-0 border-b-brandStroke">
        <div
          onClick={() =>
            setSelectedAddress({ id, type, name, address, contact })
          }
          className={`h-4 w-4 rounded-full border border-brandStroke ${
            selectedAddress?.id === id ? "bg-brandPrimary" : "bg-white"
          } `}
        ></div>
        <span>{type}</span>
      </div>
      <div className="p-8 flex flex-col gap-2">
        <p className=" text-brandDark text-base font-semibold">{name}</p>
        <p className=" text-brandTextPrimary text-base font-normal">
          {address}
        </p>
        <p className=" text-brandTextPrimary text-base font-normal">
          {contact}
        </p>
      </div>
      <div className="flex flex-row justify-between bg-brandGray border border-solid border-x-0 border-b-0 border-t-brandStroke py-4 px-6">
        <DeleteColumnOutlined />
        <button>
          <img src={Delete} />
        </button>
        <button className=" text-brandDark border border-brandDark py-2 px-3 rounded-sm">
          Set as default
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
