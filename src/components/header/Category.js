import { useEffect, useState } from "react";
import { useGetCategories } from "./hooks/useGetCategories";
import { useGetCategoryProducts } from "./hooks/useGetCategoryProducts";
import { DownOutlined } from "@ant-design/icons";

const Category = () => {
  const { data: categories, isLoading, error } = useGetCategories();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const {
    data: catProd,
    isLoading: loading,
    error: err,
  } = useGetCategoryProducts(hoveredCategory, !!hoveredCategory);
  console.log(catProd);

  const handleHover = (category) => {
    setHoveredCategory(category);
  };

  const handleLeave = () => {
    setCategoryProducts([]);
    setHoveredCategory(null);
  };

  if (isLoading) {
    return <p className="mx-auto">...</p>;
  }
  return (
    <div className=" h-[64px] flex flex-row gap-10 px-[135px] items-center justify-center">
      {categories.map((category) => {
        return (
          <>
            <div
              className="relative z-40"
              onMouseEnter={() => handleHover(category)}
              onMouseLeave={handleLeave}
            >
              <button>{category}</button>
              <DownOutlined className="text-brandTextPrimary" />
              {hoveredCategory === category && hoveredCategory && (
                <div className=" absolute top-full left-0 p-4 w-[400px] bg-white border border-gray-200 shadow-lg  z-50 ">
                  <ul>
                    {catProd.map((product) => (
                      <li
                        key={product.id}
                        className="py-1 px-2 hover:bg-gray-100"
                      >
                        <button>{product.title}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Category;
