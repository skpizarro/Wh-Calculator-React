import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ServiceReport from './components/serviceReport/ServiceReport';
import Calculate from './components/calculate/Calculate';
import Home from './components/Home/Home';
import Navbar from './components/nav/Navbar';
import'bootswatch/dist/lux/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Navbar/>

      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/service-report" component={ServiceReport}/>
          <Route path="/calculate" component={Calculate}/>
        </Switch>
        <ToastContainer/>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
