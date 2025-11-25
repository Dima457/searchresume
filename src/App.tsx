import { useState } from 'react';
import TypeOfProfessions from './comonents/TypeOfProfessions/TypeOfProfessions.tsx';
import CardPersons from './comonents/CardPersons/CardPersons.tsx';
import ButtonStart from './comonents/ButtonStart/ButtonStart.tsx';
import ButtonFile from './comonents/ButtonFile/ButtonFile.tsx';
import { mockCandidates } from './mockData';
import './App.css';

function App() {
  const [selectedProfession, setSelectedProfession] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCandidates, setShowCandidates] = useState(false);

  // Функция поиска в зависимости от выбранной профессии
  const handleStartSearch = () => {
    if (!selectedProfession) return;
    
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('candidates', JSON.stringify(mockCandidates));
      setIsLoading(false);
      setShowCandidates(true);
    }, 3000);
  };

  const handleDownloadFile = () => {
    const candidates = JSON.parse(localStorage.getItem('candidates') || '[]');
    // логика скачивания файла
  };

  // Фильтруем кандидатов по выбранной профессии
  const filteredCandidates = selectedProfession 
  ? mockCandidates
      .filter(candidate => candidate.profession === selectedProfession)
      .slice(0, 30) // Показываем до 30 карточек для выбранной профессии
  : mockCandidates.slice(0, 30); // Или 30 случайных карточек если профессия не выбрана
  return (
    <div className="app">
      {/* TypeOfProfessions как навигация сверху */}
      <TypeOfProfessions 
        onProfessionSelect={setSelectedProfession}
        selectedProfession={selectedProfession}
      />

      {!showCandidates ? (
        /* Главный экран с кнопками */
        <div className="main-section">
          <div className="hero">
            <h1>Найдите лучших кандидатов</h1>
            <p>Парсинг hh.ru для поиска подходящих специалистов</p>
            
            <div className="buttons-container">
              <ButtonStart 
                onClick={handleStartSearch} 
                isLoading={isLoading}
                disabled={!selectedProfession} // Кнопка неактивна пока не выбрана профессия
                profession={selectedProfession} // Передаем какая профессия будет искаться
              />
              <ButtonFile onClick={handleDownloadFile} />
            </div>
          </div>
        </div>
      ) : (
        /* Экран с карточками кандидатов */
        <div className="candidates-section">
          <div className="candidates-header">
            <h2>Кандидаты: {selectedProfession}</h2>
            <button onClick={() => setShowCandidates(false)}>
              ← Назад к поиску
            </button>
          </div>

          <div className="cards-container">
            {filteredCandidates.map(candidate => (
              <CardPersons key={candidate.id} candidate={candidate} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;