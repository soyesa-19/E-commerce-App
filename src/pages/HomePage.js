import Reactga4 from "react-ga4";
import ProductList from "../components/ProductListing/ProductsList";
import ImageSlider from "../components/ImageSlider";

const HomePage = () => {
  Reactga4.send({
    hitType: "pageview",
    page: "/",
    title: "Home",
  });
  return (
    <>
      <ImageSlider />
      <ProductList />
    </>
  );
};

export default HomePage;
