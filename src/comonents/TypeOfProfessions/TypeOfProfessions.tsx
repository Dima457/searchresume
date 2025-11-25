import React from 'react';
import { professions } from '../../mockData';
import './TypeOfProfessions.css';

interface TypeOfProfessionsProps {
  onProfessionSelect: (professionId: string) => void;
  selectedProfession: string | null;
}

const TypeOfProfessions: React.FC<TypeOfProfessionsProps> = ({ 
  onProfessionSelect, 
  selectedProfession 
}) => {
  return (
    <div className="professions-container">
      <h2>Специальности</h2>
      <div className="professions-grid">
        {professions.map((profession) => (
          <div
            key={profession.id}
            className={`profession-card ${
              selectedProfession === profession.id ? 'active' : ''
            }`}
            onClick={() => onProfessionSelect(profession.id)}
          >
            <h3>{profession.name}</h3>
            <span className="candidate-count">{profession.count} кандидатов</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeOfProfessions;