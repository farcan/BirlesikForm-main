import React, { useState } from 'react';
import BirFormIcon from '../BirForm.png';

const BirformPort = () => {
  const [redirectToBirlesikForm, setRedirectToBirlesikForm] = useState(false);

  const handlePNGClick = () => {
    // PNG resmine tıklandığında "BirlesikForm" sayfasına yönlendirme işlemini gerçekleştirir.
    setRedirectToBirlesikForm(true);
  };

  if (redirectToBirlesikForm) {
    // State değiştiğinde "BirlesikForm" sayfasına yönlendirme yapar.
    return window.location.replace('/bir-form');
  }

  return (
    <div>
      <img
        src={BirFormIcon}
        alt="BirformPort PNG"
        onClick={handlePNGClick}
        style={{ cursor: 'pointer' ,
        opacity: redirectToBirlesikForm ? '0.5' : '1', }}// Opaklık durumuna göre stil uygulaması
      />
    </div>
  );
};

export default BirformPort;
