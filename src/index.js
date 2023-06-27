import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


// import "jquery"
// import "@popperjs/core/dist/umd/popper"
// import "bootstrap/dist/js/bootstrap"
// import "bootstrap/dist/css/bootstrap.css"
// import Mainui from './Form/Ui_Form_Project/Main_ui';
import Mainui from './Form/Ui_Form_Project/Main_ui';
// import FilterData2 from './Data_delete_using_usestate/Big_data/FilterData2';
// import Data_Hook from './Usestate_Hook/Data_Hook';
// import FilterData1 from './Usestate_Hook/Data_delete_using_usestate/Double_data/FilterData1';


// import Form2 from './Form/Form_project/Form2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <Mainui></Mainui> 
  </React.StrictMode>
  
  );
  
  
  reportWebVitals();
  
  // <Mainui></Mainui>