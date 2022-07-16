
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {StrictMode} from 'react';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript



root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
);
/* import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
 */

