import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// redux

// layouts
import FrontLayout from "../layouts/front/index";
import AdminLayout from "../layouts/admin/index";

import { adminRoutes, publicRoutes } from "./routes";

import { createSelector } from 'reselect';

const Index = () => {

  const routepage = createSelector(
    (state ) => state.Layout,
    (state) => ({
        layoutType: state.layoutType,
    })
  );
  return (
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <FrontLayout>
                  {route.component}
              </FrontLayout>
          }
            key={idx}
            exact={true}
          />
        ))}
          {adminRoutes.map((route, idx) => (
              <Route
                  path={route.path}
                  element={
                      <AdminLayout>
                          {route.component}
                      </AdminLayout>
                  }
                  key={idx}
                  exact={true}
              />
          ))}
      </Routes>

  );
};

export default Index;
