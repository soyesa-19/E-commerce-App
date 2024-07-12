import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className=" flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
