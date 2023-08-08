import React, { useState, useEffect } from 'react';
import { FiCheckCircle, FiPlus, FiTrash, FiEyeOff, FiEye, FiSave } from 'react-icons/fi';
import './compenents/css/dynamicTextArea.css';
import PublishScreen from './compenents/PublishScreen';
import GreenInnovativeButton from './compenents/GreenInnovativeButton';

const DynamicTextAreaComponent = () => {
  const [textAreas, setTextAreas] = useState([]);
  const [choices, setChoices] = useState([]);
  const [correctChoices, setCorrectChoices] = useState([]);
  const [showChoices, setShowChoices] = useState([]);
  const [showPublishScreen, setShowPublishScreen] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false); // Yeni state ekledik
  const [images, setImages] = useState([]);
  const [confirmPublish, setConfirmPublish] = useState(false); // Yeni state ekledik

  const addNewTextArea = () => {
    setTextAreas([...textAreas, '']);
    setChoices([...choices, ['', '', '', '']]);
    setCorrectChoices([...correctChoices, '']);
    setShowChoices([...showChoices, true]);
  };

  const handlePublishClick = () => {
    setConfirmPublish(true);
  };

  const handleClosePublishScreen = () => {
    setConfirmPublish(false);
    setShowPublishScreen(false);
    setShowSubmitButton(false);
  };

  const handleConfirmPublish = () => {
    setConfirmPublish(false);
    setShowPublishScreen(true);
    setShowSubmitButton(true); // Önizleme ekranında "Gönder" butonunu göster
  };

  const handleSendData = () => {
    // Verileri JSON formatına dönüştür
    const dataToSend = {
      textAreas: textAreas,
      choices: choices,
      correctChoices: correctChoices,
    };

    // API'ye verileri gönder
    fetch('API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        // İşlemleri tamamladıktan sonra ekranı sıfırla veya işlemleri gerçekleştir
        // Örneğin: setTextAreas([]); setChoices([]); setCorrectChoices([]); setImages([]);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  };
  const removeLastTextArea = () => {
    const updatedTextAreas = [...textAreas];
    updatedTextAreas.pop();
    setTextAreas(updatedTextAreas);

    const updatedChoices = [...choices];
    updatedChoices.pop();
    setChoices(updatedChoices);

    const updatedCorrectChoices = [...correctChoices];
    updatedCorrectChoices.pop();
    setCorrectChoices(updatedCorrectChoices);

    const updatedShowChoices = [...showChoices];
    updatedShowChoices.pop();
    setShowChoices(updatedShowChoices);
  };

  const handleTextAreaChange = (index, event) => {
    const updatedTextAreas = [...textAreas];
    updatedTextAreas[index] = event.target.value;
    setTextAreas(updatedTextAreas);
  };

  const handleChoiceChange = (questionIndex, choiceIndex, event) => {
    const updatedChoices = [...choices];
    updatedChoices[questionIndex][choiceIndex] = event.target.value;
    setChoices(updatedChoices);
  };

  const handleCorrectChoiceChange = (questionIndex, event) => {
    const updatedCorrectChoices = [...correctChoices];
    updatedCorrectChoices[questionIndex] = event.target.value;
    setCorrectChoices(updatedCorrectChoices);
  };

  const handleCompleteClick = (index) => {
    console.log("Text area verisi:", textAreas[index]);
    console.log("Şıklar:", choices[index]);
    console.log("Doğru Şık:", correctChoices[index]);
  };

  const toggleChoices = (index) => {
    const updatedShowChoices = [...showChoices];
    updatedShowChoices[index] = !updatedShowChoices[index];
    setShowChoices(updatedShowChoices);
  };

  const handleImageUpload = (index, event) => {
    const updatedImages = [...images];
    updatedImages[index] = URL.createObjectURL(event.target.files[0]);
    setImages(updatedImages);
  };

  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image));
    };
  }, [images]);

  return (
    <div className="container">
    
      <div className="text-area-grid">
      
        {textAreas.map((text, index) => (
          <div key={index} className="text-area-container">
            <h2>Soru {index + 1}</h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(index, e)}
            />
            {images[index] && <img src={images[index]} alt={`Soru ${index + 1}`} />}
            <textarea
              value={text}
              onChange={(e) => handleTextAreaChange(index, e)}
              className="fixed-size-textarea"
            />
            {showChoices[index] ? (
              <div className="choices-container">
                <input
                  type="text"
                  placeholder="A"
                  value={choices[index][0]}
                  onChange={(e) => handleChoiceChange(index, 0, e)}
                />
                  <input
                  type="text"
                  placeholder="B"
                  value={choices[index][1]}
                  onChange={(e) => handleChoiceChange(index, 1, e)}
                />
                <input
                  type="text"
                  placeholder="C"
                  value={choices[index][2]}
                  onChange={(e) => handleChoiceChange(index, 2, e)}
                />
                <input
                  type="text"
                  placeholder="D"
                  value={choices[index][3]}
                  onChange={(e) => handleChoiceChange(index, 3, e)}
                />
                {/* Diğer şıkların inputları */}
                <select
                  value={correctChoices[index]}
                  onChange={(e) => handleCorrectChoiceChange(index, e)}
                >
                  <option value="">Doğru cevabı belirleyiniz.</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>
            ) : null}
            <button className="complete-button" onClick={() => handleCompleteClick(index)}>
              <FiCheckCircle />
            </button>
            {showChoices[index] ? (
              <FiEyeOff className="test-icon" onClick={() => toggleChoices(index)} />
            ) : (
              <FiEye className="test-icon" onClick={() => toggleChoices(index)} />
            )}
          </div>
        ))}
      </div>
      <div className="button-container">
   
   <button onClick={addNewTextArea}>
     <FiPlus />
   </button>
 
   <button onClick={removeLastTextArea}>
     <FiTrash />
   </button>
   <div className="publish-icon" onClick={handlePublishClick}>
     <FiSave style={{borderRadius:'5px 5px',backgroundColor:'transparent',color:'#8CABFF'}} />
     <span class
     Name="publish-icon-tooltip" style={{fontSize:'12px',fontFamily:'sans-serif',fontWeight:'bold',color:'black'}}>Önizleme</span>
   </div>
 </div>

      
      {showPublishScreen && (
        <PublishScreen
          data={{
            textAreas: textAreas,
            choices: choices,
            correctChoices: correctChoices,
          }}
          onClose={handleClosePublishScreen}
          
        /> 
        )} &nbsp;
         {showSubmitButton && (
        <div className="submit-button-container">
          <GreenInnovativeButton  onClick={handleSendData} >Gönder</GreenInnovativeButton>
        </div>
      )}&nbsp;
        {confirmPublish && (
          <div className="publish-confirm-modal">
            <p>Bu içeriği yayınlamak istediğinizden emin misiniz?</p>
            <GreenInnovativeButton  onClick={handleConfirmPublish}>Evet </GreenInnovativeButton>&nbsp;&nbsp;
            <GreenInnovativeButton onClick={handleClosePublishScreen}>Hayır</GreenInnovativeButton>
          </div>

      )}
     
    </div>
  );
};

export default DynamicTextAreaComponent;
