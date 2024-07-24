import api from "../services/axios/http";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { LOREM_IPSUM } from "../constants";
import { ShareAltOutlined, HeartOutlined } from "@ant-design/icons";

const GET_PRODUCTS_LIST = process.env.PRODUCT_DETAILS;

const ProductDetails = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("productId");
  const [prodDetail, setProdDetail] = useState();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const getProductData = async () => {
      const response = await api.get(
        `/api/products/productDetails?prodId=${orderId}`
      );
      setProdDetail(response?.data);
      console.log(response?.data);
    };
    getProductData();
  }, []);

  return (
    <div className=" flex flex-col md:flex-row gap-14 mx-auto items-start justify-center p-3">
      <Image
        className=" shadow-md p-2"
        height={"600px"}
        width={"600px"}
        src={prodDetail?.image}
      />
      <div className="flex flex-col gap-8 max-w-[40%]">
        <div className=" flex flex-col gap-6 ">
          <p className=" text-3xl font-bold">{prodDetail?.title}</p>
          <div>
            <ShareAltOutlined />
          </div>
          <div>{prodDetail?.description}</div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-3">
              <p>Qty</p>
              <div className=" border border-brandStroke rounded-[5px]">
                <button
                  className="w-10 h-6 "
                  onClick={() => setQty((prev) => prev + 1)}
                >
                  +
                </button>
                <span className="w-10 h-6">{qty}</span>
                <button
                  className="w-10 h-6 "
                  onClick={() => setQty((prev) => prev - 1)}
                >
                  -
                </button>
              </div>
            </div>
            <p>${prodDetail?.price}</p>
          </div>
          <div className="flex flex-row gap-4 w-full">
            <button className=" flex-grow rounded-lg py-[13px] px-[32px] bg-brandPrimary text-brandDark">
              Add to cart
            </button>
            <button className=" flex-grow rounded-lg py-[13px] px-[32px] text-brandDark border border-brandDark">
              Buy Now
            </button>
            <button className=" rounded-lg py-3 px-auto border border-brandDark w-12 h-12">
              <HeartOutlined />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className=" text-brandDark font-semibold text-[18px] leading-[26px]">
            Product details
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between border border-solid border-x-0 border-t-0 border-b-brandStroke">
              <p className="text-brandTextPrimary font-semibold text-base">
                Brand
              </p>
              <p className="text-brandDark font-semibold text-base">
                Shirt flex
              </p>
            </div>
            <div className="flex justify-between border border-solid border-x-0 border-t-0 border-b-brandStroke">
              <p className="text-brandTextPrimary font-semibold text-base">
                Sold By
              </p>
              <p className="text-brandDark font-semibold text-base">
                sinha Enterize
              </p>
            </div>
            <div className="flex justify-between border border-solid border-x-0 border-t-0 border-b-brandStroke">
              <p className="text-brandTextPrimary font-semibold text-base">
                Return policy
              </p>
              <p className="text-brandDark font-semibold text-base">
                30 days replacement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
