import { useQuery } from "@tanstack/react-query";
import api from "../../../services/axios/http";
const GET_PRODUCTS_LIST = process.env.REACT_APP_FETCH_ALL_PRODUCTS;

export const useFetchProduct = () => {
  const getProducts = async () => {
    const response = await api.get(GET_PRODUCTS_LIST);
    // dispatch(addProducts(response.data));
    // dispatch(addFilteredProducts(response.data));
    return response?.data;
  };

  return useQuery({
    queryKey: ["abc"],
    queryFn: getProducts,
    retry: false,
  });
};
