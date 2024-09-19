import { useQuery } from "@tanstack/react-query";
import api from "../../../../../services/axios/http";

export const useFetchAddresses = () => {
  const getUserAddresses = async () => {
    const response = await api.get("/api/addresses");

    if (response.status !== 200) {
      alert("cannot get the adddresses");
    }

    return response?.data?.addresses;
  };
  return useQuery({
    queryKey: "addresses",
    queryFn: getUserAddresses,
    retry: false,
  });
};
