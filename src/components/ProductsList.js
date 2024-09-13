import { useState } from "react";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = () => {
  const [currentProdIndex, setCurrentProdIndex] = useState(1);
  const [prodPerPage] = useState(4);

  const productsList = useSelector((store) => store.products.filteredItems);

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
  const currentProds = productsList.slice(firstProdIndex, lastProdindex);
  return (
    <>
      <div className=" flex flex-row gap-8 justify-center p-16 flex-wrap">
        {productsList.map((product) => (
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
      {/* {productsList.length > prodPerPage && (
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          currPage={currPage}
          prodPerPage={prodPerPage}
          productsList={productsList}
          pages={Math.abs(productsList.length / prodPerPage)}
          currentPage={currentPage}
        />
      )} */}
    </>
  );
};

export default ProductList;
