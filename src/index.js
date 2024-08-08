import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {useMediaQuery} from 'react-responsive';
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import {configureStore} from "./store/store";
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
    <Provider store={configureStore({})}>
        <React.Fragment>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.Fragment>
    </Provider>
);
