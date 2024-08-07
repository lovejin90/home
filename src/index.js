import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <App />
      <Footer />
  </React.StrictMode>

);
