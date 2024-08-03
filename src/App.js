import { useEffect } from "react";
import api from "./services/axios/http";
import { useDispatch } from "react-redux";
import ReactGA from "react-ga4";
import { addFilteredProducts, addProducts } from "./store/products_slice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";
import octaConfig from "./services/okta/oktaConfig";
import "./App.css";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import Cart from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import Chekout from "./pages/Chekout";
import PrivateRoute from "./components/PrivateRoute";
import SignInRedirect from "./components/SignInRedirect";
import Logout from "./components/Logout";
import CartPage from "./pages/cart/CartPage";
import WishList from "./pages/whishlist/WishList";

const GET_PRODUCTS_LIST = process.env.REACT_APP_FETCH_ALL_PRODUCTS;

const oktaAuth = new OktaAuth(octaConfig);

const restoreOriginalUri = async (_oktaAuth, originalUri) => {
  window.location.replace(originalUri || "/");
};

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
        path: "/productDetails",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Chekout />
          </PrivateRoute>
        ),
      },
      {
        path: "/callback",
        element: <LoginCallback />,
      },
      {
        path: "/signIn_redirect",
        element: <SignInRedirect />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

function App() {
  ReactGA.initialize("G-MQGTMTDF4R");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(GET_PRODUCTS_LIST);
      console.log(response);
      dispatch(addProducts(response.data));
      dispatch(addFilteredProducts(response.data));
    };
    fetchData();
  }, []);

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <RouterProvider router={router}></RouterProvider>
    </Security>
  );
}

export default App;
