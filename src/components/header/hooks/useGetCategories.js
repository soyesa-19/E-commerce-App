import { useQuery } from "@tanstack/react-query";
export const useGetCategories = () => {
  const getCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categories = await response.json();
    return categories;
  };

  return useQuery({
    queryKey: ["categories", "header"],
    queryFn: getCategories,
    retry: false,
  });
};
