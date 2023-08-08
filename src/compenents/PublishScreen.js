import React, { useState } from 'react';
import GreenInnovativeButton from './GreenInnovativeButton';

const PublishScreen = ({ data, onClose }) => {
  const [confirmPopupVisible, setConfirmPopupVisible] = useState(false);

  const handleCancelClick = () => {
    setConfirmPopupVisible(true);
  };

  const handleConfirmCancel = (confirmed) => {
    setConfirmPopupVisible(false);
    if (confirmed) {
      onClose();
    }
  };

  return (
    <div className="publish-screen-overlay">
      <div className="publish-screen">
        <h2>Data Önizleme</h2>
        <div className="data-container">
          {data.textAreas.map((text, index) => (
            <div key={index}>
              <h3>Soru {index + 1}</h3>
              <p>Text: {text}</p>
              <p>Şıklar: {data.choices[index].join(', ')}</p>
              <p>Doğru Şık: {data.correctChoices[index]}</p>
            </div>
          ))}
        </div>
        <GreenInnovativeButton className="close-button" onClick={handleCancelClick}>
          Vazgeç
        </GreenInnovativeButton>
        {confirmPopupVisible && (
          <div className="confirm-popup">
            <p>İşlem iptal ediliyor! Emin misiniz?</p>
            <button className="confirm-button" onClick={() => handleConfirmCancel(true)}>Evet</button>&nbsp;
            <button className="confirm-button" onClick={() => handleConfirmCancel(false)}>Hayır</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublishScreen;
