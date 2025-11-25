interface ButtonStartProps {
  onClick: () => void;
  isLoading: boolean;
  disabled?: boolean; // Добавьте эту строку
  profession?: string | null; // И эту, если используете
}

const ButtonStart: React.FC<ButtonStartProps> = ({ 
  onClick, 
  isLoading, 
  disabled = false,
  profession 
}) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled || isLoading}
      className="button-start"
    >
      {isLoading ? 'Поиск...' : `Найти ${profession || 'специалистов'}`}
    </button>
  );
};

export default ButtonStart;