import { useQuery } from "@tanstack/react-query";
import api from "../../../services/axios/http";

export const useGetCategoryProducts = (category, isEnabled) => {
  const getProducts = async () => {
    const response = await api.get(`/api/products/category?ctg=${category}`);
    return response?.data;
  };

  return useQuery({
    queryKey: [category],
    queryFn: getProducts,
    enabled: isEnabled,
    retry: false,
  });
};
