import api from "../services/axios/http";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { LOREM_IPSUM } from "../constants";
import { ShareAltOutlined } from "@ant-design/icons";

const GET_PRODUCTS_LIST = process.env.PRODUCT_DETAILS;

const ProductDetails = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("productId");
  const [prodDetail, setProdDetail] = useState();

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
      <div className=" flex flex-col gap-6 max-w-[40%]">
        <p className=" text-3xl font-bold">{prodDetail?.title}</p>
        <div>
          <ShareAltOutlined />
        </div>
        <div>{LOREM_IPSUM}</div>
        <div className="flex flex-row justify-between">
          <div>
            <p>Qty</p>
            <div></div>
          </div>
          <p>${prodDetail?.price}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;
