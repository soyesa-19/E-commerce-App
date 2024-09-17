import { useState } from "react";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import { useFetchProduct } from "./hooks/useFetchProducts";

const ProductList = () => {
  const [currentProdIndex, setCurrentProdIndex] = useState(1);
  const [prodPerPage] = useState(6);

  const { data: productsList } = useFetchProduct();

  const prevPage = () => {
    if (currentProdIndex <= 1) {
      return;
    }
    setCurrentProdIndex((prevState) => prevState - 1);
  };

  const currPage = (currIndex) => {
    setCurrentProdIndex(currIndex);
  };

  const nextPage = (n) => {
    if (currentProdIndex >= n) {
      return;
    }
    setCurrentProdIndex((prevState) => prevState + 1);
  };

  //calculating the indexes of items
  const lastProdindex = currentProdIndex * prodPerPage;
  const currentPage = lastProdindex / prodPerPage;
  const firstProdIndex = lastProdindex - prodPerPage;
  const currentProds = productsList?.slice(firstProdIndex, lastProdindex);
  return (
    <>
      <div className=" flex flex-row gap-8 justify-center p-16 flex-wrap">
        {currentProds?.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      {productsList?.length > prodPerPage && (
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currPage={currPage}
          prodPerPage={prodPerPage}
          productsList={productsList}
          pages={
            productsList?.length % prodPerPage != 0
              ? Math.abs(productsList?.length / prodPerPage) + 1
              : Math.abs(productsList?.length / prodPerPage)
          }
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default ProductList;
