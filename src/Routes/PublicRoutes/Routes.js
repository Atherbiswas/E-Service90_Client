import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../pages/Blog/Blog";
import About from "../../pages/Home/About/About";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import MyReview from "../../pages/Review/MyReview";
import Review from "../../pages/Review/Review";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import AllServices from "../../pages/Services/AllServices";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(
            `https://clinimedicare-server.vercel.app/services/${params.id}`
          ),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(
            `https://clinimedicare-server.vercel.app/services/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <Review></Review>
          </PrivateRoutes>
        ),
      },
      {
        path: "/reviews",
        element: <MyReview></MyReview>,
      },
    ],
  },
]);
