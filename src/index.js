import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main_Routes from './Routing/Main_Routes';
// import Cart_logic from './UseEffect_Hook/Cart_add_item/Cart_logic';
// import Timer from './Timer';
// import Effect from './Effect';


// import "jquery"
// import "@popperjs/core/dist/umd/popper"
// import "bootstrap/dist/js/bootstrap"
// import "bootstrap/dist/css/bootstrap.css"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <Main_Routes></Main_Routes>
  </React.StrictMode>
  
  );
  
  
 
  reportWebVitals();
  
