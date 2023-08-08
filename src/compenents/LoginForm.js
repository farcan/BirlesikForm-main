import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/login-form.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Sayfa yüklendiğinde LocalStorage'da kaydedilmiş bilgileri kontrol et
    const storedUsername = localStorage.getItem('rememberedUsername');
    const storedPassword = localStorage.getItem('rememberedPassword');
    const storedRememberMe = localStorage.getItem('rememberMe');

    if (storedRememberMe === 'true' && storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simüle edilmiş sahte kullanıcı doğrulama işlemi
    if (username === 'testuser' && password === 'test123') {
      // Giriş başarılı ise ErpPage.js'e yönlendir
      navigate('/DinamoErpPage');
    } else {
      console.log('Kullanıcı adı veya şifre yanlış.');
    }

    // Hatırla seçeneği işaretliyse giriş bilgilerini LocalStorage'a kaydet
    if (rememberMe) {
      localStorage.setItem('rememberedUsername', username);
      localStorage.setItem('rememberedPassword', password);
      localStorage.setItem('rememberMe', true);
    } else {
      // Hatırla seçeneği işaretli değilse LocalStorage'daki bilgileri temizle
      localStorage.removeItem('rememberedUsername');
      localStorage.removeItem('rememberedPassword');
      localStorage.removeItem('rememberMe');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className='textbox-container'>
        <label htmlFor="username">Kullanıcı Adı</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div className='textbox-container'>
        <label htmlFor="password">Şifre</label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        /> </div>
    <div className='input-checkbox'>
  <input
    type="checkbox"
    id="showPassword"
    checked={showPassword}
    onChange={handleTogglePassword}
    
  />
  <label style={{ fontSize: '14px' }} htmlFor="showPassword">
    Şifreyi Göster
  </label>
</div>
      
     
<div className='input-checkbox'>
  
  <input
    type="checkbox"
    id="rememberMe"
    checked={rememberMe}
    onChange={handleRememberMeChange}
  />
  <label htmlFor="rememberMe">
    Beni Hatırla
  </label>
</div>

      <button className='btn' type="submit">Giriş Yap</button>
    </form>
  );
};

export default LoginForm;
