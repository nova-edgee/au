// Quiz questions data
const quizQuestions = {
    science: [
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correctAnswer: 2,
            explanation: "The chemical symbol for gold is Au, derived from the Latin word 'aurum' which means gold."
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correctAnswer: 1,
            explanation: "Mars is often called the Red Planet because iron minerals in the Martian soil oxidize, or rust, causing the soil and atmosphere to look red."
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correctAnswer: 1,
            explanation: "The Blue Whale is the largest mammal in the world, reaching lengths of up to 100 feet and weights of up to 200 tons."
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correctAnswer: 2,
            explanation: "Diamond is the hardest naturally occurring substance on Earth, scoring a 10 on the Mohs scale of mineral hardness."
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correctAnswer: 2,
            explanation: "Plants absorb carbon dioxide (CO2) from the atmosphere during photosynthesis to produce energy and release oxygen."
        }
    ],
    history: [
        {
            question: "In which year did World War II end?",
            options: ["1945", "1918", "1939", "1941"],
            correctAnswer: 0,
            explanation: "World War II ended in 1945 with the surrender of Germany in May and Japan in September."
        },
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
            correctAnswer: 2,
            explanation: "George Washington was the first President of the United States, serving from 1789 to 1797."
        },
        {
            question: "The ancient city of Rome was built on how many hills?",
            options: ["5", "7", "9", "12"],
            correctAnswer: 1,
            explanation: "According to tradition, Rome was built on seven hills: Palatine, Aventine, Capitoline, Quirinal, Viminal, Esquiline, and Caelian."
        },
        {
            question: "Who was the famous queen of ancient Egypt?",
            options: ["Nefertiti", "Hatshepsut", "Cleopatra", "All of the above"],
            correctAnswer: 3,
            explanation: "Nefertiti, Hatshepsut, and Cleopatra were all famous queens of ancient Egypt who played significant roles in its history."
        },
        {
            question: "Which empire was ruled by Genghis Khan?",
            options: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "British Empire"],
            correctAnswer: 2,
            explanation: "Genghis Khan founded and ruled the Mongol Empire, which became the largest contiguous empire in history after his death."
        }
    ],
    geography: [
        {
            question: "What is the longest river in the world?",
            options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
            correctAnswer: 1,
            explanation: "The Nile River is the longest river in the world at approximately 4,135 miles (6,650 km) long."
        },
        {
            question: "Which country has the largest population in the world?",
            options: ["India", "United States", "China", "Russia"],
            correctAnswer: 2,
            explanation: "China has the largest population in the world, with over 1.4 billion people as of 2023."
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correctAnswer: 2,
            explanation: "Canberra is the capital city of Australia, specifically designed to be the capital as a compromise between Sydney and Melbourne."
        },
        {
            question: "Which desert is the largest in the world?",
            options: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Antarctic Desert"],
            correctAnswer: 3,
            explanation: "The Antarctic Desert is the largest desert in the world, covering approximately 5.5 million square miles."
        },
        {
            question: "Which mountain range separates Europe from Asia?",
            options: ["Andes", "Alps", "Himalayas", "Ural Mountains"],
            correctAnswer: 3,
            explanation: "The Ural Mountains form the traditional boundary between Europe and Asia, stretching from the Arctic Ocean to Kazakhstan."
        }
    ],
    entertainment: [
        {
            question: "Who directed the movie 'Inception'?",
            options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"],
            correctAnswer: 1,
            explanation: "Christopher Nolan directed 'Inception', which was released in 2010 and starred Leonardo DiCaprio."
        },
        {
            question: "Which singer is known as the 'Queen of Pop'?",
            options: ["Beyoncé", "Madonna", "Lady Gaga", "Rihanna"],
            correctAnswer: 1,
            explanation: "Madonna is commonly referred to as the 'Queen of Pop' due to her influential career and record-breaking success."
        },
        {
            question: "Which actor played Iron Man in the Marvel Cinematic Universe?",
            options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
            correctAnswer: 2,
            explanation: "Robert Downey Jr. portrayed Tony Stark/Iron Man in the Marvel Cinematic Universe films."
        },
        {
            question: "Which TV series is set in the fictional continent of Westeros?",
            options: ["The Witcher", "Game of Thrones", "The Lord of the Rings", "Vikings"],
            correctAnswer: 1,
            explanation: "Game of Thrones is set primarily in the fictional continents of Westeros and Essos."
        },
        {
            question: "Who wrote the Harry Potter book series?",
            options: ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"],
            correctAnswer: 1,
            explanation: "J.K. Rowling is the author of the Harry Potter book series, which has sold over 500 million copies worldwide."
        }
    ],
    sports: [
        {
            question: "In which sport would you perform a slam dunk?",
            options: ["Tennis", "Basketball", "Soccer", "Golf"],
            correctAnswer: 1,
            explanation: "A slam dunk is a basketball move where a player jumps and powerfully throws the ball downward through the basket."
        },
        {
            question: "How many players are there in a standard soccer team?",
            options: ["9", "10", "11", "12"],
            correctAnswer: 2,
            explanation: "A standard soccer team has 11 players on the field, including one goalkeeper."
        },
        {
            question: "Which country won the FIFA World Cup in 2018?",
            options: ["Germany", "Brazil", "France", "Argentina"],
            correctAnswer: 2,
            explanation: "France won the 2018 FIFA World Cup, defeating Croatia 4-2 in the final."
        },
        {
            question: "In tennis, what term is used for a score of zero?",
            options: ["Nil", "Zero", "Love", "Nada"],
            correctAnswer: 2,
            explanation: "In tennis, the term 'love' is used to represent a score of zero."
        },
        {
            question: "Which athlete has won the most Olympic medals?",
            options: ["Usain Bolt", "Michael Phelps", "Simone Biles", "Carl Lewis"],
            correctAnswer: 1,
            explanation: "Michael Phelps has won the most Olympic medals, with 28 medals (23 gold, 3 silver, and 2 bronze)."
        }
    ],
    technology: [
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Personal Unit", "Central Processor Unit", "Central Programming Unit"],
            correctAnswer: 0,
            explanation: "CPU stands for Central Processing Unit, which is the primary component of a computer that performs most of the processing."
        },
        {
            question: "Which company created the iPhone?",
            options: ["Microsoft", "Samsung", "Apple", "Google"],
            correctAnswer: 2,
            explanation: "Apple Inc. created the iPhone, with the first model released in 2007."
        },
        {
            question: "What year was the first iPhone released?",
            options: ["2005", "2007", "2009", "2010"],
            correctAnswer: 1,
            explanation: "The first iPhone was released by Apple on June 29, 2007."
        },
        {
            question: "What does 'HTML' stand for?",
            options: ["Hypertext Markup Language", "Hyperlink Text Management Language", "High Tech Modern Language", "Hyper Transfer Markup Language"],
            correctAnswer: 0,
            explanation: "HTML stands for Hypertext Markup Language, which is the standard language for creating web pages."
        },
        {
            question: "Which of these is not a programming language?",
            options: ["Python", "Java", "Cobra", "C++"],
            correctAnswer: 2,
            explanation: "Cobra is not a programming language. The others (Python, Java, and C++) are all programming languages."
        }
    ]
};

// Game state variables
let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let currentCategory = '';
let questions = [];

// DOM elements
const categorySelector = document.getElementById('category-selector');
const quizContainer = document.getElementById('quiz-container');
const quizCard = document.getElementById('quiz-card');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const flipBtn = document.getElementById('flip-btn');
const nextBtn = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const resultText = document.getElementById('result-text');
const explanationElement = document.getElementById('explanation');
const progressElement = document.getElementById('progress');
const resultsContainer = document.getElementById('results-container');
const finalScoreElement = document.getElementById('final-score');
const totalQuestionsElement = document.getElementById('total-questions');
const scoreMessageElement = document.getElementById('score-message');
const restartBtn = document.getElementById('restart-btn');

// Initialize the game
function initGame() {
    // Event listeners for category selection
    document.querySelectorAll('.category').forEach(category => {
        category.addEventListener('click', function() {
            currentCategory = this.getAttribute('data-category');
            startQuiz(currentCategory);
        });
    });
    
    // Event listeners for game controls
    flipBtn.addEventListener('click', flipCard);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartGame);
}

// Start the quiz for the selected category
function startQuiz(category) {
    // Hide category selector and show quiz container
    categorySelector.style.display = 'none';
    quizContainer.style.display = 'block';
    
    // Set up questions for the selected category
    questions = quizQuestions[category];
    
    // Reset game state
    currentQuestion = 0;
    score = 0;
    scoreElement.textContent = score;
    
    // Load first question
    loadQuestion();
}

// Load the current question
function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Add new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', selectOption);
        optionsContainer.appendChild(optionElement);
    });
    
    // Reset selection
    selectedOption = null;
    flipBtn.disabled = true;
    
    // Update progress bar
    const progress = ((currentQuestion) / questions.length) * 100;
    progressElement.style.width = `${progress}%`;
}

// Handle option selection
function selectOption(event) {
    // Remove selected class from all options
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    event.target.classList.add('selected');
    selectedOption = parseInt(event.target.dataset.index);
    flipBtn.disabled = false;
}

// Flip the card to show result
function flipCard() {
    const question = questions[currentQuestion];
    const isCorrect = selectedOption === question.correctAnswer;
    
    // Mark correct/incorrect answers
    document.querySelectorAll('.option').forEach(option => {
        const optionIndex = parseInt(option.dataset.index);
        if (optionIndex === question.correctAnswer) {
            option.classList.add('correct');
        } else if (optionIndex === selectedOption && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Update score if correct
    if (isCorrect) {
        score++;
        scoreElement.textContent = score;
        resultText.textContent = "Correct!";
        resultText.style.color = "#4CAF50";
        createConfetti();
    } else {
        resultText.textContent = "Incorrect!";
        resultText.style.color = "#F44336";
    }
    
    explanationElement.textContent = question.explanation;
    
    // Flip the card
    quizCard.classList.add('flipped');
}

// Move to the next question
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        // Load next question
        quizCard.classList.remove('flipped');
        loadQuestion();
    } else {
        // Game over
        showResults();
    }
}

// Show final results
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    finalScoreElement.textContent = score;
    totalQuestionsElement.textContent = questions.length;
    
    // Set score message based on performance
    const percentage = (score / questions.length) * 100;
    
    if (percentage >= 80) {
        scoreMessageElement.textContent = "Excellent job! You're a quiz master!";
    } else if (percentage >= 60) {
        scoreMessageElement.textContent = "Good effort! You know your stuff!";
    } else if (percentage >= 40) {
        scoreMessageElement.textContent = "Not bad! Keep learning!";
    } else {
        scoreMessageElement.textContent = "Keep practicing! You'll get better!";
    }
    
    if (percentage >= 60) {
        createConfetti();
    }
}

// Restart the game
function restartGame() {
    resultsContainer.style.display = 'none';
    categorySelector.style.display = 'grid';
    currentQuestion = 0;
    score = 0;
}

// Create confetti animation
function createConfetti() {
    const colors = ['#ff6b6b', '#6bff6b', '#6b6bff', '#ffff6b', '#ff6bff', '#6bffff'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 15 + 5 + 'px';
        confetti.style.height = Math.random() * 15 + 5 + 'px';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation completes
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

// Initialize the game when the page loads
window.addEventListener('DOMContentLoaded', initGame);