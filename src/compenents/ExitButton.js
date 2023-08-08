import React from 'react';
import { useNavigate } from 'react-router-dom';
import ExitImage from '../Exit.png';

const ExitButton = () => {
  const navigate = useNavigate();

  const handleExitClick = () => {
    // Uyarı mesajı göster
    const confirmExit = window.confirm('Güvenli çıkış yapmak istediğinize emin misiniz?');

    // Eğer kullanıcı Evet'i seçerse, 'HomePage.js' sayfasına yönlendirme işlemi
    if (confirmExit) {
      navigate('/');
    }
  };

  return (
    <img
      src={ExitImage}
      alt="Exit"
      style={{ width: '135px', height: '120px', cursor: 'pointer' }}
      onClick={handleExitClick}
    />
  );
};

export default ExitButton;
