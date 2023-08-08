import React, { useState } from 'react';
import './css/AvatarUploader.css';
const AvatarUploader = () => {
  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem('selectedImage') || null
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/png')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        localStorage.setItem('selectedImage', reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Lütfen geçerli bir PNG dosyası seçin!');
    }
  };

  return (
    <div className='upload-container'>
      <div className='image-container'
        style={{
        /*  width: '150px',
          height: '150px',
          borderRadius: '50%',
          backgroundColor: '#f0f0f0',
          marginLeft:'15%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333',
          overflow: 'hidden', // Eklenen resmin dışarı taşmasını engeller*/
        }}
      >
        {selectedImage ? (
          <img className='image'
            src={selectedImage}
            alt="Uploaded Avatar"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <p></p>
        )}
      </div>
      <input
        type="file"
        accept=".png"
        onChange={handleImageChange}
       
      />
    </div>
  );
};

export default AvatarUploader;
