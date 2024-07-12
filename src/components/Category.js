import { categories } from "../constants";

const Category = () => {
  return (
    <div className=" h-[64px] flex flex-row gap-10 px-[135px] items-center justify-center">
      {categories.map((category) => {
        return <p className="">{category}</p>;
      })}
    </div>
  );
};

export default Category;
