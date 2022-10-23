import React from 'react';
//import ReactDOM from 'react-dom'; outdated
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import  Main  from "./components/Main";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <HashRouter>
        <Main/>
        </HashRouter>
    </React.StrictMode>
);