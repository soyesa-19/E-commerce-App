import { useQuery } from "@tanstack/react-query";
import ReactGA from "react-ga4";
import api from "../../services/axios/http";

const GET_PRODUCTS_LIST = process.env.REACT_APP_PRODUCT_DETAILS;

const useGetProductDetails = (orderId) => {
  const getProductData = async () => {
    const response = await api.get(`${GET_PRODUCTS_LIST}?prodId=${orderId}`);

    ReactGA.event({
      category: "Product",
      action: "view product",
      label: response?.data?.title || "unknown product",
      value: orderId,
    });

    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: response?.data?.title || "Product Details",
      location: window.location.href,
    });

    return response?.data;
  };

  return useQuery({
    queryKey: ["prodDetails", orderId],
    queryFn: getProductData,
    retry: false,
  });
};

export default useGetProductDetails;
