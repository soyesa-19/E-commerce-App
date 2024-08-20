import { useQuery } from "@tanstack/react-query";

export const useGetCategoryProducts = (category, isEnabled) => {
  const getProducts = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const categoryProducts = await response.json();

    return categoryProducts;
  };

  return useQuery({
    queryKey: [category],
    queryFn: getProducts,
    enabled: isEnabled,
    retry: false,
  });
};
