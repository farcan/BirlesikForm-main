import React from 'react';
import '../compenents/css/button.css'; // Button stilleri burada tanımlanacak

const GreenInnovativeButton = ({ children, onClick }) => {
  return (
    <button className="green-innovative-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default GreenInnovativeButton;
