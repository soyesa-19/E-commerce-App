import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductsList";
import Filter from "../components/Filter";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "8px",
        }}
      >
        <SearchBar />
        <Filter />
      </div>
      <ProductList />
    </>
  );
};

export default HomePage;
