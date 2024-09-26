import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div className=" relative flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
