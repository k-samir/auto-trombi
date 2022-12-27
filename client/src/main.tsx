import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
//import 'antd/dist/antd.min.css';

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
   
);
