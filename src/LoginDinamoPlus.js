import React from 'react'
import { BackKeyComponent } from './compenents/BackKeyComponent';
import LoginForm from './compenents/LoginForm';
import dinamoLogo from './dinplusLogin.png';

function LoginErp() {
  return (
    <div className="App">
    <header className="App-header">
    <a href='https://birlesikyazilim.com/dinamo-erp-hakkinda' target='_blank' rel='noopener noreferrer'>
  <img src={dinamoLogo} alt='dinamoErpLogo' />
</a>

      &nbsp;
      <LoginForm/>
      <BackKeyComponent/>
    </header>
  </div>
  )
}

export default LoginErp