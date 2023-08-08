import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginDinamo from './LoginDinamo';
import LoginDinamoPlus from './LoginDinamoPlus';
import ErpPage from './ErpPage';
import EFatura from './compenents/EFatura';
import EArsiv from './compenents/EArsiv';
import EIrsaliye from './compenents/EIrsaliye';
import BES from './compenents/BES';
import { Profile } from './Profile';
import BirlesikForm from './BirlesikForm';




function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginDinamo" element={<LoginDinamo />} />
        <Route path="/LoginDinamoPlus" element={<LoginDinamoPlus/>} />
        <Route path='/DinamoErpPage' element={<ErpPage/>}/>
        <Route path="/e-fatura" element={<EFatura />} />
        <Route path="/bir-form" element={<BirlesikForm/>}/>
          <Route path="/e-arsiv" element={<EArsiv />} />
          <Route path="/e-irsaliye" element={<EIrsaliye />} />
          <Route path="/bes" element={<BES />} />
          <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
