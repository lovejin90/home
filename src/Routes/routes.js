import React from "react";
import Main from "../pages/Index";
import CateList from "../pages/CateList";
import HotdealList from "../hotdeal/HotdealList";
import Login from "../pages/Authentication/Login";
import MenuSetting from "../pages/Admin/MenuSetting";
import Lh from "../pages/Admin/Lh";
import Food from "../pages/Admin/Food";

import { Navigate } from "react-router-dom";
//Dashboard
import Dashboard from "../pages/Dashboard";

// Import Utility Pages
import StarterPage from "../pages/Utility/Starter-Page";
import TimeLine from "../pages/Utility/TimeLine-Page";
import FAQs from "../pages/Utility/FAQs-Page";
import Pricing from "../pages/Utility/Pricing-Page";
import Error404 from "../pages/Utility/Error404-Page";
//import Error500 from "../pages/Utility/Error500-Page";

// Import UIElement Pages
import UiAlerts from "../pages/UiElements/UiAlerts";
import UiBadge from "../pages/UiElements/UiBadge";
import UiBreadcrumb from "../pages/UiElements/UiBreadcrumb";
import UiButtons from "../pages/UiElements/UiButtons";
import UiCards from "../pages/UiElements/UiCards";
import UiCarousel from "../pages/UiElements/UiCarousel";
import UiDropdown from "../pages/UiElements/UiDropdowns";
import UiGrid from "../pages/UiElements/UiGrid";
import UiImages from "../pages/UiElements/UiImages";
import UiLightbox from "../pages/UiElements/UiLightbox";
import UiModals from "../pages/UiElements/UiModals";
import UiOffcanvas from "../pages/UiElements/UiOffcanvas";
import UiRangeSlider from "../pages/UiElements/UiRangeSlider";
import UiSessionTimeout from "../pages/UiElements/UiSessionTimeout";
import UiPagination from "../pages/UiElements/UiPagination";
import UiProgressBars from "../pages/UiElements/UiProgressBars";
import UiPlaceholders from "../pages/UiElements/UiPlaceholders";
import UiTabs from "../pages/UiElements/UiTabs&Accordions";
import UiTypography from "../pages/UiElements/UiTypography";
import UiToasts from "../pages/UiElements/UiToasts";
import UiVideo from "../pages/UiElements/UiVideo";
import UiPopovers from "../pages/UiElements/UiPopovers&Tooltips";

// Import Forms
import FormEditors from "../pages/Forms/FormEditors";
import FormUpload from "../pages/Forms/FormUpload";
import FormXeditable from "../pages/Forms/FormXeditable";
import FormMask from "../pages/Forms/FormMask";
import FormElements from "../pages/Forms/FormElements";
import FormAdvanced from "../pages/Forms/FormAdvanced";
import FormValidations from "../pages/Forms/FormValidations";
import FormWizard from "../pages/Forms/FormWizard";

// Import Tables
import BasicTable from "../pages/Tables/BasicTable.js";
import ListJs from "../pages/Tables/ListTables/ListTables";
import DataTable from "../pages/Tables/DataTables/DataTables";

// Import Charts
import ApexCharts from "../pages/Charts/ApexCharts";
import ChartJs from "../pages/Charts/ChartjsCharts";
import Sparklinechart from "../pages/Charts/SparklineCharts";
import FloatChart from "../pages/Charts/FloatCharts";
import JknobCharts from "../pages/Charts/JqueryKnobCharts";

// Import Icon Pages
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign";
import IconFontawesome from "../pages/Icons/IconFontAwesome";
import IconDripicons from "../pages/Icons/IconDrip";
import IconBoxicons from "../pages/Icons/IconBoxicons";

// Import Map Pages
import VectorMaps from "../pages/Maps/VectorMap";
const adminRoutes = [
  { path: "/admin", component: <Dashboard /> },

  { path: "/admin/menu-setting", component: <MenuSetting /> },
  { path: "/admin/food", component: <Food /> },
  { path: "/admin/lh", component: <Lh /> },

  //dashboard
  { path: "/dashboard", component: <Dashboard /> },

  // Utility Pages
  { path: "/pages-starter", component: <StarterPage /> },
  { path: "/pages-timeline", component: <TimeLine /> },
  { path: "/pages-faqs", component: <FAQs /> },
  { path: "/pages-pricing", component: <Pricing /> },

  // UiElements Pages
  { path: "/ui-alerts", component: <UiAlerts /> },
  { path: "/ui-badge", component: <UiBadge /> },
  { path: "/ui-breadcrumb", component: <UiBreadcrumb /> },
  { path: "/ui-buttons", component: <UiButtons /> },
  { path: "/ui-cards", component: <UiCards /> },
  { path: "/ui-carousel", component: <UiCarousel /> },
  { path: "/ui-dropdowns", component: <UiDropdown /> },
  { path: "/ui-grid", component: <UiGrid /> },
  { path: "/ui-images", component: <UiImages /> },
  { path: "/ui-lightbox", component: <UiLightbox /> },
  { path: "/ui-modals", component: <UiModals /> },
  { path: "/ui-offcanvas", component: <UiOffcanvas /> },
  { path: "/ui-rangeslider", component: <UiRangeSlider /> },
  { path: "/ui-sessiontimeout", component: <UiSessionTimeout /> },
  { path: "/ui-pagination", component: <UiPagination /> },
  { path: "/ui-progressbars", component: <UiProgressBars /> },
  { path: "/ui-placeholders", component: <UiPlaceholders /> },
  { path: "/ui-tabs-accordions", component: <UiTabs /> },
  { path: "/ui-typography", component: <UiTypography /> },
  { path: "/ui-toasts", component: <UiToasts /> },
  { path: "/ui-video", component: <UiVideo /> },
  { path: "/ui-popovers", component: <UiPopovers /> },

  // Forms pages
  { path: "/form-elements", component: <FormElements /> },
  { path: "/form-validation", component: <FormValidations /> },
  { path: "/form-advanced", component: <FormAdvanced /> },
  { path: "/form-editor", component: <FormEditors /> },
  { path: "/form-uploads", component: <FormUpload /> },
  { path: "/form-editors", component: <FormXeditable /> },
  { path: "/form-wizard", component: <FormWizard /> },
  { path: "/form-mask", component: <FormMask /> },

  // Tables pages
  { path: "/tables-basic", component: <BasicTable /> },
  { path: "/tables-listjs", component: <ListJs /> },
  { path: "/table-datatables", component: <DataTable /> },

  // Charts Pages
  { path: "/chart-apexcharts", component: <ApexCharts /> },
  { path: "/chart-chartjscharts", component: <ChartJs /> },
  { path: "/chart-floatcharts", component: <FloatChart /> },
  { path: "/chart-jknobcharts", component: <JknobCharts /> },
  { path: "/chart-sparklinecharts", component: <Sparklinechart /> },

  // Icons Pages
  { path: "/icon-boxicon", component: <IconBoxicons /> },
  { path: "/icons-materialdesign", component: <IconMaterialdesign /> },
  { path: "/icons-fontawesome", component: <IconFontawesome /> },
  { path: "/icon-dripicons", component: <IconDripicons /> },

  // Maps Pages
  { path: "/maps-vector", component: <VectorMaps /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [
  { path: "/", component: <Main /> },
  { path: "/cate/:id", component: <CateList /> },

];

const NoHeaderRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/list", component: <HotdealList /> },
  { path: "/*", component: <Error404 /> },
];
export { adminRoutes, publicRoutes, NoHeaderRoutes };
