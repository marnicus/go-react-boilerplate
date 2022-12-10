import NotFoundPage from "./NotFoundPage";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./pages/Layout";
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Join = React.lazy(() => import("./pages/Join"));
const NoMatch = React.lazy(() => import("./pages/NoMatch"));

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={
            <React.Suspense fallback={<>...</>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="join"
          element={
            <React.Suspense fallback={<>...</>}>
              <Join />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};
