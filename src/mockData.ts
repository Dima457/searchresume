export interface Candidate {
  id: string;
  fullName: string;
  phone: string;
  description: string;
  profession: string;
  experience: string;
  salary: string;
}

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    fullName: 'Иванов Алексей Петрович',
    phone: '+7 (912) 345-67-89',
    description: 'Frontend разработчик с 5-летним опытом работы с React и TypeScript. Участвовал в разработке крупных проектов для банковского сектора.',
    profession: 'frontend',
    experience: '5 лет',
    salary: '150 000 руб.'
  },
  {
    id: '2',
    fullName: 'Петрова Мария Сергеевна',
    phone: '+7 (923) 456-78-90',
    description: 'Backend разработчик специализирующийся на Node.js и Python. Имеет опыт работы с микросервисной архитектурой и облачными решениями.',
    profession: 'backend',
    experience: '4 года',
    salary: '140 000 руб.'
  },
  {
    id: '3',
    fullName: 'Сидоров Дмитрий Иванович',
    phone: '+7 (934) 567-89-01',
    description: 'Fullstack разработчик с опытом работы над стартапами и корпоративными приложениями. Владеет современным стеком технологий.',
    profession: 'fullstack',
    experience: '6 лет',
    salary: '180 000 руб.'
  },
  {
    id: '4',
    fullName: 'Козлова Анна Владимировна',
    phone: '+7 (945) 678-90-12',
    description: 'UI/UX дизайнер с глубоким пониманием пользовательского опыта. Создавала дизайн-системы для мобильных и веб-приложений.',
    profession: 'designer',
    experience: '3 года',
    salary: '120 000 руб.'
  },
  {
    id: '5',
    fullName: 'Николаев Сергей Олегович',
    phone: '+7 (956) 789-01-23',
    description: 'DevOps инженер с опытом настройки CI/CD процессов и управления облачной инфраструктурой. Сертифицированный AWS специалист.',
    profession: 'devops',
    experience: '5 лет',
    salary: '200 000 руб.'
  },
  // Дополняем до 30+ кандидатов
  {
    id: '6',
    fullName: 'Федоров Артем Викторович',
    phone: '+7 (967) 890-12-34',
    description: 'Frontend разработчик с опытом создания SPA приложений. Отлично владеет Vue.js и современным JavaScript.',
    profession: 'frontend',
    experience: '3 года',
    salary: '130 000 руб.'
  },
  {
    id: '7',
    fullName: 'Орлова Екатерина Дмитриевна',
    phone: '+7 (978) 901-23-45',
    description: 'Backend разработчик на Java и Spring Framework. Участвовала в разработке высоконагруженных систем.',
    profession: 'backend',
    experience: '5 лет',
    salary: '160 000 руб.'
  },
  {
    id: '8',
    fullName: 'Белов Максим Андреевич',
    phone: '+7 (989) 012-34-56',
    description: 'Fullstack разработчик с сильным бэкенд-бэкграундом. Работал с PostgreSQL, MongoDB и Redis.',
    profession: 'fullstack',
    experience: '4 года',
    salary: '170 000 руб.'
  },
  {
    id: '9',
    fullName: 'Громова Ольга Игоревна',
    phone: '+7 (990) 123-45-67',
    description: 'UI/UX дизайнер с опытом работы в fintech. Создавала интерфейсы для мобильных банковских приложений.',
    profession: 'designer',
    experience: '4 года',
    salary: '135 000 руб.'
  },
  {
    id: '10',
    fullName: 'Данилов Павел Сергеевич',
    phone: '+7 (901) 234-56-78',
    description: 'DevOps инженер с опытом работы с Kubernetes и Docker. Настраивал мониторинг и логирование.',
    profession: 'devops',
    experience: '6 лет',
    salary: '220 000 руб.'
  },
  {
    id: '11',
    fullName: 'Ершова Виктория Александровна',
    phone: '+7 (912) 345-67-89',
    description: 'Mobile разработчик на React Native. Имеет опыт публикации приложений в AppStore и Google Play.',
    profession: 'mobile',
    experience: '3 года',
    salary: '140 000 руб.'
  },
  {
    id: '12',
    fullName: 'Жуков Илья Петрович',
    phone: '+7 (923) 456-78-90',
    description: 'Frontend разработчик с углубленными знаниями в оптимизации производительности. Работал с Webpack и Vite.',
    profession: 'frontend',
    experience: '4 года',
    salary: '145 000 руб.'
  },
  {
    id: '13',
    fullName: 'Зайцева Анастасия Олеговна',
    phone: '+7 (934) 567-89-01',
    description: 'Backend разработчик на Python и Django. Специализируется на создании REST API и GraphQL.',
    profession: 'backend',
    experience: '3 года',
    salary: '125 000 руб.'
  },
  {
    id: '14',
    fullName: 'Ильин Константин Викторович',
    phone: '+7 (945) 678-90-12',
    description: 'Fullstack разработчик с опытом работы в e-commerce. Разрабатывал системы онлайн-платежей.',
    profession: 'fullstack',
    experience: '5 лет',
    salary: '190 000 руб.'
  },
  {
    id: '15',
    fullName: 'Крылов Денис Михайлович',
    phone: '+7 (956) 789-01-23',
    description: 'UI/UX дизайнер с опытом создания дизайн-систем. Работал в крупной IT компании.',
    profession: 'designer',
    experience: '5 лет',
    salary: '150 000 руб.'
  },
  {
    id: '16',
    fullName: 'Ларина Татьяна Сергеевна',
    phone: '+7 (967) 890-12-34',
    description: 'DevOps инженер с опытом работы с GitLab CI и Jenkins. Настраивала процессы деплоя.',
    profession: 'devops',
    experience: '4 года',
    salary: '180 000 руб.'
  },
  {
    id: '17',
    fullName: 'Морозов Александр Игоревич',
    phone: '+7 (978) 901-23-45',
    description: 'Mobile разработчик на Flutter. Создавал кроссплатформенные приложения для iOS и Android.',
    profession: 'mobile',
    experience: '4 года',
    salary: '160 000 руб.'
  },
  {
    id: '18',
    fullName: 'Новикова Елена Владимировна',
    phone: '+7 (989) 012-34-56',
    description: 'Frontend разработчик с опытом работы в стартапе. Быстро обучается и адаптируется к новым технологиям.',
    profession: 'frontend',
    experience: '2 года',
    salary: '110 000 руб.'
  },
  {
    id: '19',
    fullName: 'Осипов Роман Андреевич',
    phone: '+7 (990) 123-45-67',
    description: 'Backend разработчик на Go. Участвовал в разработке микросервисной архитектуры.',
    profession: 'backend',
    experience: '4 года',
    salary: '170 000 руб.'
  },
  {
    id: '20',
    fullName: 'Павлова Светлана Дмитриевна',
    phone: '+7 (901) 234-56-78',
    description: 'Fullstack разработчик с опытом менторства. Проводила код-ревью и обучала junior разработчиков.',
    profession: 'fullstack',
    experience: '7 лет',
    salary: '210 000 руб.'
  },
  {
    id: '21',
    fullName: 'Романов Артем Витальевич',
    phone: '+7 (912) 345-67-89',
    description: 'UI/UX дизайнер с художественным образованием. Создает уникальные и запоминающиеся интерфейсы.',
    profession: 'designer',
    experience: '2 года',
    salary: '100 000 руб.'
  },
  {
    id: '22',
    fullName: 'Семенова Ирина Олеговна',
    phone: '+7 (923) 456-78-90',
    description: 'DevOps инженер с опытом работы в банковской сфере. Обеспечивала безопасность и отказоустойчивость.',
    profession: 'devops',
    experience: '5 лет',
    salary: '200 000 руб.'
  },
  {
    id: '23',
    fullName: 'Тарасов Михаил Сергеевич',
    phone: '+7 (934) 567-89-01',
    description: 'Mobile разработчик на Swift. Специализируется на создании нативных iOS приложений.',
    profession: 'mobile',
    experience: '4 года',
    salary: '170 000 руб.'
  },
  {
    id: '24',
    fullName: 'Устинова Алиса Романовна',
    phone: '+7 (945) 678-90-12',
    description: 'Frontend разработчик с опытом работы в геймдеве. Создавала интерфейсы для игровых проектов.',
    profession: 'frontend',
    experience: '3 года',
    salary: '140 000 руб.'
  },
  {
    id: '25',
    fullName: 'Филиппов Дмитрий Александрович',
    phone: '+7 (956) 789-01-23',
    description: 'Backend разработчик с опытом работы с базами данных. Оптимизировал запросы и улучшал производительность.',
    profession: 'backend',
    experience: '6 лет',
    salary: '180 000 руб.'
  },
  {
    id: '26',
    fullName: 'Харитонова Юлия Викторовна',
    phone: '+7 (967) 890-12-34',
    description: 'Fullstack разработчик с бизнес-аналитикой. Понимает потребности бизнеса и предлагает технические решения.',
    profession: 'fullstack',
    experience: '5 лет',
    salary: '195 000 руб.'
  },
  {
    id: '27',
    fullName: 'Цветков Антон Павлович',
    phone: '+7 (978) 901-23-45',
    description: 'UI/UX дизайнер с психологическим образованием. Исследует пользовательское поведение и создает интуитивные интерфейсы.',
    profession: 'designer',
    experience: '4 года',
    salary: '130 000 руб.'
  },
  {
    id: '28',
    fullName: 'Чернов Евгений Олегович',
    phone: '+7 (989) 012-34-56',
    description: 'DevOps инженер с опытом работы в облачных провайдерах. Мигрировал проекты на AWS и Azure.',
    profession: 'devops',
    experience: '7 лет',
    salary: '230 000 руб.'
  },
  {
    id: '29',
    fullName: 'Шестакова Ольга Игоревна',
    phone: '+7 (990) 123-45-67',
    description: 'Mobile разработчик на Kotlin. Создавала приложения для Android с использованием современных архитектур.',
    profession: 'mobile',
    experience: '3 года',
    salary: '150 000 руб.'
  },
  {
    id: '30',
    fullName: 'Щукин Владислав Андреевич',
    phone: '+7 (901) 234-56-78',
    description: 'Frontend разработчик с опытом работы в edtech. Разрабатывал образовательные платформы и LMS системы.',
    profession: 'frontend',
    experience: '4 года',
    salary: '155 000 руб.'
  }
];

export const professions = [
  { id: 'frontend', name: 'Frontend Разработчики', count: 12 },
  { id: 'backend', name: 'Backend Разработчики', count: 8 },
  { id: 'fullstack', name: 'Fullstack Разработчики', count: 15 },
  { id: 'designer', name: 'UI/UX Дизайнеры', count: 6 },
  { id: 'devops', name: 'DevOps Инженеры', count: 5 },
  { id: 'mobile', name: 'Mobile Разработчики', count: 9 }
];