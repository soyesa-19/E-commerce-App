import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addFilteredProducts, addProducts } from "./store/products_slice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import Cart from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "productDetails",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(addProducts(response.data));
      dispatch(addFilteredProducts(response.data));
    };
    fetchData();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
