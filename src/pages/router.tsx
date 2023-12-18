import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout";

import HomePage from "./HomePage/HomePage";
import ErrorPage from "./ErrorPage/ErrorPage";
import LoginPage from "./LoginPage/LoginPage";
import MembershipPage from "./MembershipPage/MembershipPage";
import ProductPage from "./ProductPage/ProductPage";
import SearchresultPage from "./SearchresultPage/SearchresultPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout.Default />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="membership" element={<MembershipPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="search" element={<SearchresultPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

export default router;
