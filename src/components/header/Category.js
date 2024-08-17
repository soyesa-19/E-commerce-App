import { useGetCategories } from "./hooks/useGetCategories";
import { DownOutlined } from "@ant-design/icons";

const Category = () => {
  const { data: categories, isLoading, error } = useGetCategories();
  console.log(categories);

  if (isLoading) {
    return <p className="mx-auto">...</p>;
  }
  return (
    <div className=" h-[64px] flex flex-row gap-10 px-[135px] items-center justify-center">
      {categories.map((category) => {
        return (
          <div className="flex gap-2">
            <button>{category}</button>
            <DownOutlined className="text-brandTextPrimary" />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
