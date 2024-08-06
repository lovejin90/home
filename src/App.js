import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotdealList from "./hotdeal/HotdealList";
import Main from "./pages/Index";
import React from "react";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}

            <Route path="/" element={<Main/>}/>
            <Route path="/list" element={<HotdealList/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
