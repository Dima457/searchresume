import React from 'react';
import './ButtonFile.css';

interface ButtonFileProps {
  onClick: () => void;
}

const ButtonFile: React.FC<ButtonFileProps> = ({ onClick }) => {
  return (
    <button className="file-button" onClick={onClick}>
      📥 Скачать файл
    </button>
  );
};

export default ButtonFile;