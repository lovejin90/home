import React from "react";
import { Routes, Route } from "react-router-dom";

// redux

// layouts
import FrontLayout from "../layouts/front/index";
import AdminLayout from "../layouts/admin/index";
import NoHeaderLayout from "../layouts/NoHeader";

import { adminRoutes, publicRoutes,NoHeaderRoutes } from "./routes";

const Index = () => {

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
          {NoHeaderRoutes.map((route, idx) => (
              <Route
                  path={route.path}
                  element={
                      <NoHeaderLayout>
                          {route.component}
                      </NoHeaderLayout>
                  }
                  key={idx}
                  exact={true}
              />
          ))}
      </Routes>

  );
};

export default Index;
