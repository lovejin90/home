import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotdealList from "./hotdeal/HotdealList";
import Main from "./pages/Index";
import CateList from "./pages/CateList";
import React from "react";
import {useMediaQuery} from 'react-responsive';

export const Mobile = ({children}) => {
    const isMobile = useMediaQuery({
        query : "(max-width:768px)"
    });

    return <>{isMobile && children}</>
}

export const PC = ({children}) => {
    const isPc = useMediaQuery({
        query : "(min-width:769px)"
    });

    return <>{isPc && children}</>
}
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/cate/:id" element={<CateList/>}/>
            <Route path="/list" element={<HotdealList/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
