import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductsList";
import Filter from "../components/Filter";

const HomePage = () => {
  return (
    <>
      <div className=" flex justify-between">
        <SearchBar />
        <Filter />
      </div>
      <ProductList />
    </>
  );
};

export default HomePage;
