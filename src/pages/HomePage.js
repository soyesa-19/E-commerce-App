import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductsList";
import Filter from "../components/Filter";
import Img from "../assets/images/img.jpeg";

const HomePage = () => {
  return (
    <>
      <img src={Img} alt="image" />
      <ProductList />
    </>
  );
};

export default HomePage;
