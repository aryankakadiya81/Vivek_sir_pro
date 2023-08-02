import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Calculation from './UseMemo_Hook/Calculation';
// import Main_Usememo from './UseMemo_Hook/Understand_Usememo';
// import Darshan_task from './UseMemo_Hook/Darshan_task'
import Understand_Usecallback from './UseCallback_Hook/Understand_Usecallback';

// import "jquery"
// import "@popperjs/core/dist/umd/popper"
// import "bootstrap/dist/js/bootstrap"
// import "bootstrap/dist/css/bootstrap.css"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <Understand_Usecallback></Understand_Usecallback>
  </React.StrictMode>
  
  );
  
  
  
  reportWebVitals();
  
  // <Darshan_task></Darshan_task>
  // <Main_Usememo></Main_Usememo>
  // <Calculation></Calculation>
  