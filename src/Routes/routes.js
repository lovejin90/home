import React from "react";
import Main from "../pages/Index";
import CateList from "../pages/CateList";
import HotdealList from "../hotdeal/HotdealList";
import Login from "../pages/Authentication/Login";


const adminRoutes = [
  { path: "/admin", component: <Login /> },
  { path: "/login", component: <Login /> },

];

const publicRoutes = [
  { path: "/", component: <Main /> },
  { path: "/cate/:id", component: <CateList /> },
  { path: "/list", component: <HotdealList /> },

  // // Authentication Page
  // { path: "/logout", component: <Logout /> },
  // { path: "/login", component: <Login /> },
  // { path: "/forgot-password", component: <ForgetPasswordPage /> },
  // { path: "/register", component: <Register /> },
  //
  // // Authentication Inner Pages
  // { path: "/auth-login", component: <Login1 /> },
  // { path: "/auth-register", component: <Register1 /> },
  // { path: "/auth-recoverpw", component: <RecoverPassword /> },
  // { path: "/auth-lock-screen", component: <LockScreen /> },
  //
  // // Utility Pages
  // { path: "/pages-404", component: <Error404 /> },
  // { path: "/pages-500", component: <Error500 /> },
  // { path: "/pages-maintenance", component: <Maintenance /> },
  // { path: "/pages-comingsoon", component: <ComingSoon /> },
];

export { adminRoutes, publicRoutes };
