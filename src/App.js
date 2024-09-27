import { useEffect, lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReactGA from "react-ga4";
import { OktaAuth } from "@okta/okta-auth-js";
import { Security, LoginCallback } from "@okta/okta-react";
import api from "./services/axios/http";
import octaConfig from "./services/okta/oktaConfig";
import { addFilteredProducts, addProducts } from "./store/products_slice";
import { fetchCartItems } from "./store/cart-slice";
import { fetchWishlistItems } from "./store/wishList-slice";
import { ToastContainer } from "react-toastify";

import "./App.css";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import PrivateRoute from "./components/PrivateRoute";
import SignInRedirect from "./components/SignInRedirect";
import Logout from "./components/Logout";
import SignUp from "./pages/signUp/SignUp";

const ProductDetails = lazy(() =>
  import("./pages/productDetail/ProductDetails")
);
const CartPage = lazy(() => import("./pages/cart/CartPage"));
const WishList = lazy(() => import("./pages/whishlist/WishList"));
const Checkout = lazy(() => import("./pages/checkout/Chekout"));

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
        element: (
          <Suspense fallback={<p>loading ...</p>}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Suspense fallback={<p>loading ...</p>}>
              <CartPage />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Suspense fallback={<p>loading ...</p>}>
              <WishList />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Suspense fallback={<p>Loading ...</p>}>
              <Checkout />
            </Suspense>
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
      {
        path: "/signup_user",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  ReactGA.initialize("G-MQGTMTDF4R");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
    dispatch(fetchWishlistItems());
  }, []);

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </Security>
  );
}

export default App;
