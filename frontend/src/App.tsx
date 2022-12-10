import React from "react";
import ArticleIndexPage from "./ArticleIndexPage";
import ArticlePage from "./ArticlePage";
import NewArticlePage from "./NewArticlePage";
import NotFoundPage from "./NotFoundPage";
import { Routes, Route } from "react-router-dom";
import { StreamApp, NotificationDropdown, FlatFeed } from "react-activity-feed";
import "react-activity-feed/dist/index.css";
import { AppRoutes } from "./AppRouter";

const App: React.FC = () => {
  return (
    <StreamApp
      apiKey="dz5f4d5kzrue"
      appId="102254"
      token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic21hbGwtcmVjaXBlLTMiLCJleHAiOjE2NzA0ODE4ODl9.kHI9d2Z-LPo7ABq-bFShKsQAlDIFfwkBNgjHVCzKuxc"
    >
      <AppRoutes />
    </StreamApp>
  );
};

export default App;
