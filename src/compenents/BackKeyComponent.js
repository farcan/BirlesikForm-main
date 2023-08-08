import React from 'react';
import { useNavigate } from 'react-router-dom';
import backBtn from '../backButton.png';
import './css/back-button.css';

export const BackKeyComponent = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="back-button-container">
      <button className="back-button" onClick={goBack}>
        <img style={{width:'75px',height:'75px'}}  src={backBtn} alt="backbtn" />
      </button>
    </div>
  );
};
