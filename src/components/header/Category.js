import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useGetCategories } from "./hooks/useGetCategories";
import { useGetCategoryProducts } from "./hooks/useGetCategoryProducts";

const Category = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const { data: categories, isLoading, error } = useGetCategories();
  let {
    data: catProd,
    isLoading: loading,
    error: err,
  } = useGetCategoryProducts(hoveredCategory, !!hoveredCategory);
  const navigate = useNavigate();

  const handleHover = (category) => {
    setHoveredCategory(category);
  };

  const handleLeave = () => {
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
              <button className=" py-2 text-brandDark text-base font-normal">
                {category}
              </button>
              <DownOutlined className=" text-brandStroke" />
              {hoveredCategory === category && hoveredCategory && (
                <div className=" absolute -left-10 flex items-center justify-center p-4 w-[400px] min-h-[150px] bg-white border-2 border-brandStroke rounded-lg shadow-brandShadow z-10 before:content-[''] before:absolute before:-top-4 before:left-12 before:border-8 before:border-x-transparent before:border-t-transparent before:border-b-brandStroke after:content-[''] after:absolute after:-top-3  after:left-12 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-white">
                  {loading ? (
                    <Spin size="small" className="" />
                  ) : (
                    <ul>
                      {catProd?.map(({ id, title }) => (
                        <li
                          key={id}
                          className="py-3 px-2 hover:bg-brandGray block border border-solid border-x-0 border-t-0 border-b-brandStroke  "
                        >
                          <button
                            onClick={() =>
                              navigate(`/productDetails?productId=${id}`)
                            }
                            className=" text-start"
                          >
                            {title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
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
