import React from 'react'
import logo from './logo.svg';
import './App.css';
import dinamoLogo from './dinplusLogin.png';
// import logo2 from './logo2.svg';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className="App">
    <header className="App-header">
    <a href='https://birlesikyazilim.com/dinamoplus' target='_blank' rel='noopener noreferrer'>
  <img src={dinamoLogo} alt='dinamoErpLogo' />
</a>

      &nbsp;
      <linearGradient>
      <button  style={{background:'#00000000'}}>
       <Link to='/LoginDinamoPlus'> <img src={logo} className="App-logo" alt="logo"  /></Link>  
       <p className='homepage-title'>Dinamo ERP</p>
         </button>

      <button  style={{background:'#00000000'}}> 
      <Link to='/LoginDinamo'> <img src={logo} className="App-logo2" alt="logo"  /> </Link>
      <p className='homepage-title'>Dinamo Plus</p>
        </button>

      </linearGradient>
      
      
     
    </header>
  </div>
  )
}

export default HomePage