import React from 'react'
import ReactDOM from 'react-dom/client'


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


// index.css'
import "../styles/StyleTrafficLight.css"


// components
import TrafficLight from "./components/SemaforoLogica.jsx";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <TrafficLight />
  </React.StrictMode>,
);
