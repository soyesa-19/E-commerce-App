import axios from "axios";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { LOREM_IPSUM } from "../constants";
import { ShareAltOutlined } from "@ant-design/icons";
import { Button as CustomButton } from "../components/Button/button";

const ProductDetails = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("productId");
  const [prodDetail, setProdDetail] = useState();

  useEffect(() => {
    const getProductData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const productDetail = response?.data?.filter((prod) => {
        return prod.id == orderId;
      });
      setProdDetail(productDetail?.[0]);
      console.log(productDetail);
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
        <div>
          <CustomButton onClick={() => alert("hello")}>
            Move to cart
          </CustomButton>
          <CustomButton onClick={() => alert("hello")}>Buy now</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
