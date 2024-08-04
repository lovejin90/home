import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotdealList from "./hotdeal/HotdealList";
//import Home from "./pages/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/list" element={<HotdealList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
