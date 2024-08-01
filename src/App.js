import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotdealList from "./hotdeal/HotdealList";

import axios from 'axios';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/list"  element={<HotdealList/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
