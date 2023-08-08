import React, { useState } from 'react';
import '../compenents/css/birlesik-menu.css';
import { BackKeyComponent } from './BackKeyComponent';
import ExitButton from './ExitButton';
import DnmLogo from './DinamoFormLogo.png';
import Modal from 'react-modal'; // react-modal ekledik
import { FiCheckCircle, FiEye, FiEyeOff, FiPlus, FiTrash } from 'react-icons/fi';
import DinamoPlusLogo from '../dinplusLogin.png';

// Stil dosyasını eklememize gerek yok, çünkü react-modal kendi içinde stil sağlıyor.

const BirlesikMenuBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <div className="left-container">
        <button className='plusform-btn' onClick={openModal}>
          <img
            style={{  width: '150px', height: '140px' }}
            src={DnmLogo}
            alt=""
          />     
        </button>
        <span style={{fontFamily:'sans-serif',fontSize:'20px',color:'#7A9D54'}}>

       {/* <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="DinamoForm Bilgi"
          className="modal"
          overlayClassName="overlay"
        >
          <h2>DinamoForm Beta v.1.0</h2>
          <p>
            <strong>Dökümantasyon:</strong>
          </p>
          <ul>
            <li>
              <FiPlus/> iconuna basarak yeni bir soru ekleyebilirsiniz.
              <li>
             <FiTrash/> iconuna basarak en son eklenen soruyu silebilirsiniz.   
              </li>
            </li>
              <li>
                <FiEye/> iconunu şıklı soru eklemek isterseniz açabilirsiniz. &nbsp;
                <li>
                <FiEyeOff/> iconu hem şıklı soruları gizlemek için hem de şıksız soru kullanıcaksınız kullanabilirsiniz.
                </li>
                <li>
                  <FiCheckCircle/> iconuna basarak sorunuzu ve şıklarınızı kaydedebilirsiniz.
                </li>
                
              </li>
      
          </ul>
          <button onClick={closeModal}>Kapat</button>
        </Modal>*/}
                  <span> <b>DinamoPlus Form</b></span>
        </span>
        
      </div>

      <div className="right-container">

        
        <div className="profile-container">
          <BackKeyComponent />
        </div>
        <div style={{ width: '100px', }} className="profile-container">
          <ExitButton />
        </div>

        
      </div>

      {/* Iconlar container'ı */}
      
    </div>
  );
};

export default BirlesikMenuBar;
