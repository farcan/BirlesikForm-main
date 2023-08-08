import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Menubar.css'
import DnmLogo from './dinplusLogin.png';
import ProfileLogo from './ProfileLogo.png';
import { BackKeyComponent } from './compenents/BackKeyComponent';
import ExitButton from './compenents/ExitButton';
import EFatura from './compenents/eFatura.png';
import EIrsaliye from './compenents/eIrsaliye.png';
import EArsiv from './compenents/eArsiv.png';
import BES from './compenents/BES.png';
import BirformPort from './compenents/BirformPort';

function MenuBar() {
  return (
    <div className="app-container">
      <div className="left-container">
        <Link to="/DinamoErpPage">
          <img style={{width:'100%',height:'100%',marginTop:'-20px'}} src={DnmLogo} alt="DinamoErp" />
        </Link>
      </div>

      <div className="right-container">
        <div style={{ width: '85px'}} className='profile-container'>
          <BirformPort/>
        </div>
        
        
        <div className="profile-container">
          <Link to="/profile">
            <img style={{width:85, height:85}} src={ProfileLogo} alt="" />
          </Link>
        </div>
        <div  className="profile-container ">
          <BackKeyComponent />
        </div>
        <div style={{ width: '100px' }} className="profile-container">
          <ExitButton />
        </div>

      </div>

      
   {/*  <div className="icon-container">
        <Link  to="/e-fatura" className="icon">
          <img src={EFatura} alt="eFatura" /><span style={{marginLeft:'-50%',textDecoration:'none'}}>e-Fatura</span>
        </Link>
        <Link to="/e-arsiv" className="icon">
          <img src={EArsiv} alt="" /><span style={{marginLeft:'-50%',textDecoration:'none'}}>e-Arşiv</span>
        </Link>
        <Link to="/e-irsaliye" className="icon">
          <img src={EIrsaliye} alt="" /><span style={{marginLeft:'-50%',textDecoration:'none'}}>e-İrsaliye</span>
        </Link>
        <Link to="/bes" className="icon">
          <img src={BES} alt="" /><span style={{marginLeft:'-50%',textDecoration:'none'}}>BES</span>
        </Link>
        
      </div> */}

      
    </div>
  );
}

export default MenuBar;
