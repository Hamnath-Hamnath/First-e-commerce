import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App";
import {Provider} from 'react-redux';
import store from "./redux/store";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
   <Provider store={store}>
   <App />
   </Provider>
  </BrowserRouter>
);
