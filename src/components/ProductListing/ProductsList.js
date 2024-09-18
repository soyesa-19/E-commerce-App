import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import { useFetchProduct } from "./hooks/useFetchProducts";
import Filter from "../Filter/Filter";

const items = [
  {
    key: "1",
    label: " High to Low",
  },
  {
    key: "2",
    label: "Low to High",
  },
];

const ProductList = () => {
  const [currentProdIndex, setCurrentProdIndex] = useState(1);
  const [prodPerPage] = useState(6);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Filter");
  const [sortedProductList, setSortedProductList] = useState([]);

  const { data: productsList } = useFetchProduct();

  useEffect(() => {
    if (productsList) {
      setSortedProductList([...productsList]);
    }
  }, [productsList]);

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
  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    if (selectedItem) {
      setSelectedMenuItem(selectedItem.label);

      let sortedList;
      if (e.key === "1") {
        sortedList = productsList.sort((a, b) => b.price - a.price);
      } else if (e.key === "2") {
        sortedList = productsList.sort((a, b) => a.price - b.price);
      }

      setSortedProductList([...sortedList]);
    }
  };

  //calculating the indexes of items
  const lastProdindex = currentProdIndex * prodPerPage;
  const currentPage = lastProdindex / prodPerPage;
  const firstProdIndex = lastProdindex - prodPerPage;
  const currentProds = sortedProductList?.slice(firstProdIndex, lastProdindex);
  return (
    <div className=" flex flex-col gap-3 ">
      <div className="ml-auto pr-16 py-8 flex  items-center">
        <Filter
          handleMenuClick={handleMenuClick}
          selectedMenuItem={selectedMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
          items={items}
        />
      </div>
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
    </div>
  );
};

export default ProductList;
