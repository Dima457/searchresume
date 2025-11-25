import React from 'react';
import  type { Candidate } from '../../mockData';
import './CardPersons.css';

interface CardPersonsProps {
  candidate: Candidate;
}

const CardPersons: React.FC<CardPersonsProps> = ({ candidate }) => {
  return (
    <div className="card-person">
      <div className="card-header">
        <h3 className="candidate-name">{candidate.fullName}</h3>
        <span className="profession-badge">{candidate.profession}</span>
      </div>
      
      <div className="card-body">
        <div className="contact-info">
          <span className="phone">📱 {candidate.phone}</span>
          <span className="experience">⏳ {candidate.experience}</span>
          <span className="salary">💰 {candidate.salary}</span>
        </div>
        
        <p className="description">{candidate.description}</p>
      </div>
      
      <div className="card-footer">
        <button className="contact-button">Связаться</button>
        <button className="save-button">Сохранить</button>
      </div>
    </div>
  );
};

export default CardPersons;