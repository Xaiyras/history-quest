// ========== ВСЕ ВОПРОСЫ ДЛЯ КВЕСТА ==========
const questions = [
    // Уровень 1: Механическая эра
    {
        id: 1, level: 1, levelName: "Механическая эра",
        questionText: "Кто считается первым программистом в истории?",
        options: ["Чарльз Бэббидж", "Ада Лавлейс", "Алан Тьюринг", "Джон фон Нейман"],
        correctAnswer: 1,
        explanation: "Ада Лавлейс написала первую в мире программу для аналитической машины Чарльза Бэббиджа. В её честь назван язык программирования Ada.",
        points: 10
    },
    {
        id: 2, level: 1, levelName: "Механическая эра",
        questionText: "Как называлось механическое устройство, спроектированное Чарльзом Бэббиджем, которое считается прообразом современного компьютера?",
        options: ["Разностная машина", "Аналитическая машина", "Паскалина", "Абак"],
        correctAnswer: 1,
        explanation: "Аналитическая машина Бэббиджа имела все основные компоненты современного компьютера: память, процессор и устройство ввода.",
        points: 10
    },
    {
        id: 3, level: 1, levelName: "Механическая эра",
        questionText: "Какое устройство, изобретённое Блезом Паскалем в 1642 году, могло выполнять сложение и вычитание?",
        options: ["Абак", "Логарифмическая линейка", "Паскалина", "Арифмометр"],
        correctAnswer: 2,
        explanation: "Паскалина — первое реально работающее механическое счётное устройство.",
        points: 10
    },
    
    // Уровень 2: Первое поколение (ламповые компьютеры)
    {
        id: 4, level: 2, levelName: "Ламповые компьютеры",
        questionText: "Как назывался первый электронный компьютер общего назначения, построенный в 1946 году в США?",
        options: ["Z3", "Colossus", "ENIAC", "UNIVAC"],
        correctAnswer: 2,
        explanation: "ENIAC весил 27 тонн, занимал 167 м² и содержал около 18 000 радиоламп.",
        points: 10
    },
    {
        id: 5, level: 2, levelName: "Ламповые компьютеры",
        questionText: "Какой принцип организации компьютера, предложенный Джоном фон Нейманом, используется до сих пор?",
        options: ["Разделение времени", "Хранимая программа", "Параллельные вычисления", "Виртуализация"],
        correctAnswer: 1,
        explanation: "Принцип хранимой программы — и данные, и команды хранятся в одной памяти.",
        points: 10
    },
    {
        id: 6, level: 2, levelName: "Ламповые компьютеры",
        questionText: "Кто создал математическую модель 'машину Тьюринга', ставшую основой теории алгоритмов?",
        options: ["Алан Тьюринг", "Клод Шеннон", "Джордж Буль", "Норберт Винер"],
        correctAnswer: 0,
        explanation: "Алан Тьюринг также взломал немецкий шифр 'Энигма' во время Второй мировой войны.",
        points: 10
    },
    
    // Уровень 3: Транзисторы и интегральные схемы
    {
        id: 7, level: 3, levelName: "Транзисторы и микросхемы",
        questionText: "Какое изобретение в 1947 году заменило громоздкие радиолампы?",
        options: ["Микропроцессор", "Транзистор", "Интегральная схема", "Конденсатор"],
        correctAnswer: 1,
        explanation: "Транзистор изобрели в Bell Labs (Шокли, Бардин, Браттейн), получив Нобелевскую премию.",
        points: 10
    },
    {
        id: 8, level: 3, levelName: "Транзисторы и микросхемы",
        questionText: "Какой язык программирования, созданный в 1957 году, стал первым языком высокого уровня?",
        options: ["COBOL", "LISP", "FORTRAN", "ALGOL"],
        correctAnswer: 2,
        explanation: "FORTRAN (Formula Translation) создан для научных и инженерных вычислений.",
        points: 10
    },
    {
        id: 9, level: 3, levelName: "Транзисторы и микросхемы",
        questionText: "Кто изобрёл интегральную микросхему?",
        options: ["Джек Килби и Роберт Нойс", "Стив Джобс и Возняк", "Гейтс и Аллен", "Мур и Нойс"],
        correctAnswer: 0,
        explanation: "Джек Килби (Texas Instruments) и Роберт Нойс (Fairchild) независимо изобрели интегральную схему в 1958-1959 гг.",
        points: 10
    },
    
    // Уровень 4: Эра персональных компьютеров
    {
        id: 10, level: 4, levelName: "Персональные компьютеры",
        questionText: "Кто основал компанию Apple и представил Apple I?",
        options: ["Гейтс и Аллен", "Джобс и Возняк", "Пейдж и Брин", "Ритчи и Томпсон"],
        correctAnswer: 1,
        explanation: "Стив Джобс и Стив Возняк основали Apple в 1976 году.",
        points: 10
    },
    {
        id: 11, level: 4, levelName: "Персональные компьютеры",
        questionText: "Какая ОС Microsoft стала доминирующей на ПК в 1990-е?",
        options: ["MS-DOS", "Windows", "Linux", "macOS"],
        correctAnswer: 1,
        explanation: "Windows 95 стала прорывом, предложив графический интерфейс для массового пользователя.",
        points: 10
    },
    {
        id: 12, level: 4, levelName: "Персональные компьютеры",
        questionText: "Кто создал ядро Linux и положил начало Open Source?",
        options: ["Ричард Столлман", "Линус Торвальдс", "Эрик Реймонд", "Тим Бернерс-Ли"],
        correctAnswer: 1,
        explanation: "Линус Торвальдс создал ядро Linux в 1991 году. Сегодня Linux работает на миллионах серверов.",
        points: 10
    },
    
    // Уровень 5: Современность и будущее
    {
        id: 13, level: 5, levelName: "Современность",
        questionText: "Кто изобрёл Всемирную паутину (WWW), HTML, HTTP и первый браузер?",
        options: ["Марк Андриссен", "Тим Бернерс-Ли", "Винтон Серф", "Роберт Кайо"],
        correctAnswer: 1,
        explanation: "Тим Бернерс-Ли работал в CERN и в 1989 году предложил концепцию WWW.",
        points: 10
    },
    {
        id: 14, level: 5, levelName: "Современность",
        questionText: "Какой язык программирования, созданный Гвидо ван Россумом, стал популярным для машинного обучения?",
        options: ["Java", "C++", "Python", "Ruby"],
        correctAnswer: 2,
        explanation: "Python создан в 1991 году. Его простота и библиотеки сделали его языком №1 для data science.",
        points: 10
    },
    {
        id: 15, level: 5, levelName: "Современность",
        questionText: "Какое направление использует квантовые биты (кубиты) для вычислений?",
        options: ["Нейрокомпьютинг", "Квантовые вычисления", "Облачные вычисления", "Криптовалюта"],
        correctAnswer: 1,
        explanation: "Квантовые компьютеры используют суперпозицию и запутанность для решения недоступных задач.",
        points: 10
    }
];

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let currentLevel = 1;
let currentLevelQuestions = [];
let currentQuestionIndex = 0;
let totalScore = 0;
let levelScores = {1:0, 2:0, 3:0, 4:0, 5:0};
let completedLevels = [];
let answered = false;
let playerName = "";

// ========== ЗАГРУЗКА ПРОГРЕССА ==========
function loadProgress() {
    const saved = localStorage.getItem('questProgress');
    if (saved) {
        const data = JSON.parse(saved);
        currentLevel = data.currentLevel;
        totalScore = data.totalScore;
        levelScores = data.levelScores;
        completedLevels = data.completedLevels;
    }
    updateUI();
}

function saveProgress() {
    const progress = {
        currentLevel: currentLevel,
        totalScore: totalScore,
        levelScores: levelScores,
        completedLevels: completedLevels
    };
    localStorage.setItem('questProgress', JSON.stringify(progress));
}

// ========== ЗАГРУЗКА ВОПРОСОВ УРОВНЯ ==========
function loadLevel(level) {
    currentLevelQuestions = questions.filter(q => q.level === level);
    currentQuestionIndex = 0;
    answered = false;
    
    // Обновляем заголовок уровня
    if (currentLevelQuestions.length > 0) {
        document.getElementById('levelName').textContent = currentLevelQuestions[0].levelName;
    }
    document.getElementById('levelBadge').textContent = `Уровень ${level}`;
    
    renderQuestion();
    updateProgressBar();
}

function renderQuestion() {
    if (currentQuestionIndex >= currentLevelQuestions.length) {
        completeLevel();
        return;
    }
    
    const q = currentLevelQuestions[currentQuestionIndex];
    document.getElementById('questionText').innerHTML = q.questionText;
    
    // Очищаем и заполняем варианты ответов
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    q.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(idx);
        container.appendChild(btn);
    });
    
    // Скрываем обратную связь и кнопку "Далее"
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('questionImage').innerHTML = '';
    
    answered = false;
}

// ========== ПРОВЕРКА ОТВЕТА ==========
function checkAnswer(selectedIndex) {
    if (answered) return;
    
    const q = currentLevelQuestions[currentQuestionIndex];
    const isCorrect = (selectedIndex === q.correctAnswer);
    const feedbackDiv = document.getElementById('feedback');
    
    if (isCorrect) {
        totalScore += q.points;
        levelScores[currentLevel] += q.points;
        feedbackDiv.innerHTML = `<div class="correct">✅ Правильно! ${q.explanation}</div>`;
        updateUI();
        saveProgress();
    } else {
        const correctText = q.options[q.correctAnswer];
        feedbackDiv.innerHTML = `<div class="incorrect">❌ Неправильно. Правильный ответ: ${correctText}. ${q.explanation}</div>`;
    }
    
    feedbackDiv.style.display = 'block';
    answered = true;
    
    // Блокируем кнопки
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    // Показываем кнопку "Далее"
    document.getElementById('nextBtn').style.display = 'block';
}

// ========== СЛЕДУЮЩИЙ ВОПРОС ==========
function nextQuestion() {
    if (!answered) return;
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentLevelQuestions.length) {
        renderQuestion();
    } else {
        completeLevel();
    }
}

// ========== ЗАВЕРШЕНИЕ УРОВНЯ ==========
function completeLevel() {
    if (!completedLevels.includes(currentLevel)) {
        completedLevels.push(currentLevel);
        saveProgress();
    }
    
    if (currentLevel < 5) {
        // Показываем сообщение о завершении уровня
        alert(`🎉 Уровень ${currentLevel} пройден! Переход к следующему...`);
        currentLevel++;
        saveProgress();
        loadLevel(currentLevel);
    } else {
        // Игра завершена
        alert(`🏆 Поздравляем! Вы прошли весь квест!\nВаши баллы: ${totalScore} из 150`);
        
        // Запрос имени для таблицы лидеров
        const name = prompt("Введите ваше имя для таблицы рекордов:") || "Аноним";
        saveToLeaderboard(name, totalScore);
        localStorage.setItem('lastScore', totalScore);
        window.location.href = 'results.html';
    }
}

// ========== СОХРАНЕНИЕ В ТАБЛИЦУ ЛИДЕРОВ ==========
function saveToLeaderboard(name, score) {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({
        name: name,
        score: score,
        date: new Date().toLocaleDateString()
    });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// ========== ОБНОВЛЕНИЕ ИНТЕРФЕЙСА ==========
function updateUI() {
    document.getElementById('scoreValue').textContent = totalScore;
}

function updateProgressBar() {
    const totalQuestions = currentLevelQuestions.length;
    const progress = (currentQuestionIndex / totalQuestions) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

// ========== ВЫХОД И СОХРАНЕНИЕ ==========
function exitGame() {
    saveProgress();
    window.location.href = 'index.html';
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    loadLevel(currentLevel);
    document.getElementById('nextBtn').onclick = nextQuestion;
    document.getElementById('exitBtn').onclick = exitGame;
});