import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./Pages/Home/Home.jsx";
import Signup from "./Components/SignUp/Signup.jsx";
import ProductScreen from "./Components/ProductScreen.jsx";
import Login from "./Components/SignUp/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route  path="/product/:id" element={<ProductScreen />} />
      <Route  path="/signup" element={<Signup />} />
      <Route  path="/login" element={<Login />} />
    </Route>
  )
);







createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
