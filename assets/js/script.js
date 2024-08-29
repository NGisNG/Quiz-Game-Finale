/*jshint esversion: 6 */
const questions = [
    // Array of question objects, each containing a question and its answers
    {
        question: "Which of these colours is NOT featured in the logo for Google?",
        answers: [
            { text: "Yellow", correct: false},
            { text: "Pink", correct: true},
            { text: "Blue", correct: false},
            { text: "Green", correct: false},
        ]
    },

    {
        question: "Which card game revolves around numbers and basic math?",
        answers: [
            { text: "Uno", correct: true},
            { text: "Go Fish", correct: false},
            { text: "Twister", correct: false},
            { text: "Munchkin", correct: false},
        ]
    },

    {
        question: "which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: true},
            { text: "Antartica", correct: false},
        ]
    },

    {
        question: "In what year was McDonald founded?",
        answers: [
            { text: "1964", correct: false},
            { text: "1955", correct: true},
            { text: "1951", correct: false},
            { text: "1947", correct: false},
        ]
    },

    {
        question: "Area 51 is located in which US state?",
        answers: [
            { text: "New Mexico", correct: false},
            { text: "Nevada", correct: true},
            { text: "Arizona", correct: false},
            { text: "Utah", correct: false},
        ]
    },

    {
        question: "Rolex is a company that specializes in what type of product?",
        answers: [
            { text: "Watches", correct: true},
            { text: "Cars", correct: false},
            { text: "Computers", correct: false},
            { text: "Sports equipment", correct: false},
        ]
    },

    {
        question: "Earl Grey tea is black tea flavoured with what?",
        answers: [
            { text: "Lavender", correct: false},
            { text: "Vanilla", correct: false},
            { text: "Honey", correct: false},
            { text: "Bergamot oil", correct: true},
        ]
    },

    {
        question: "Which chemical element in the Periodic table, has the symbol Na?",
        answers: [
            { text: "Carbon", correct: false},
            { text: "Sodium", correct: true},
            { text: "Lead", correct: false},
            { text: "Nitrogen", correct: false},
        ]
    },

    {
        question: "What was the original name of the search engine Google?",
        answers: [
            { text: "CatMassage", correct: false},
            { text: "SearchPro", correct: false},
            { text: "BackRub", correct: true},
            { text: "Netscape Navigator", correct: false},
        ]
    },

    {
        question: "What is the name given to Indian food cooked over charcoal in a clay oven?",
        answers: [
            { text: "Biryani", correct: false},
            { text: "Tandoori", correct: true},
            { text: "Pani puri", correct: false},
            { text: "Tiki masala", correct: false},
        ]
    },

    {
        question: "What does VR stand for?",
        answers: [
            { text: "Very Real", correct: false},
            { text: "Visual Recognition", correct: false},
            { text: "Virtual Reality", correct: true},
            { text: "Voice Recognition", correct: false},
        ]
    },

    {
        question: "What geometric shape is generally used for stop signs?",
        answers: [
            { text: "Hexagon", correct: false},
            { text: "Octagon", correct: true},
            { text: "Circle", correct: false},
            { text: "Triangle", correct: false},
        ]
    },

    {
        question: "Who is depicted on the US hundred dollar bill?",
        answers: [
            { text: "Benjamin Franklin", correct: true},
            { text: "George Washington", correct: false},
            { text: "Abraham Lincoln", correct: false},
            { text: "Thomas Jefferson", correct: false},
        ]
    },

    {
        question: "What is the largest organ of the human body?",
        answers: [
            { text: "Heart", correct: false},
            { text: "Skin", correct: true},
            { text: "large Intestine", correct: false},
            { text: "Liver", correct: false},
        ]
    },

    {
        question: "Earth is located in which galaxy?",
        answers: [
            { text: "The Mars Galaxy", correct: false},
            { text: "The Milky Way", correct: true},
            { text: "The Galaxy Note", correct: false},
            { text: "The Black Hole", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question"); // Reference to the question display element
const answerButtons = document.getElementById("answer-buttons"); // Reference to the container for answer buttons
const nextButton = document.getElementById("next-btn"); // Reference to the "Next Question" button

let currentQuestionIndex = 0; // Index to track the current question
let score = 0; // Variable to store the user's score

function startQuiz() {
    // Initializes the quiz by resetting the question index and score, then shows the first question
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next Question"; // Setting the initial text for the next button
    showQuestion();
}

function showQuestion() {
    // Displays the current question and answer buttons
    resetState(); // Clears previous question's state
    let currentQuestion = questions[currentQuestionIndex]; // Fetches the current question object
    let questionNo = currentQuestionIndex + 1; // Adjusts question number for display
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Displays the question

    currentQuestion.answers.forEach(answer => {
        // Creates a button for each answer
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); // Adds styling class
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct; // Marks the correct answer
        }
        button.addEventListener("click", selectAnswer); // Adds click event to handle answer selection
    });
}

function resetState() {
    // Resets the state of the quiz for the next question
    nextButton.style.display = "none"; // Hides the next button
    while(answerButtons.firstChild){
        // Removes previous answer buttons
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    // Handles the selection of an answer
    const selectedBtn = e.target; // The button that was clicked
    const isCorrect = selectedBtn.dataset.correct === "true"; // Checks if the selected answer is correct
    if(isCorrect){
        selectedBtn.classList.add("correct"); // Styles the correct answer
        score++; // Increments the score if the answer is correct
    } else{
        selectedBtn.classList.add("incorrect"); // Styles the incorrect answer
    }
    // Highlights the correct answer and disables all buttons
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true; // Disables the button after selection
    });
    nextButton.style.display = "block"; // Shows the next button
}

function showScore() {
    // Displays the final score after the quiz ends
    resetState(); // Clears the state
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; // Shows the score
    nextButton.innerHTML = "Play Again"; // Changes the next button to "Play Again"
    nextButton.style.display = "block"; // Shows the next button
}

function handleNextButton() {
    // Handles logic for proceeding to the next question or showing the score
    currentQuestionIndex++; // Moves to the next question
    if(currentQuestionIndex < questions.length) {
        showQuestion(); // Shows the next question if available
    } else {
        showScore(); // Shows the final score if all questions have been answered
    }
}

nextButton.addEventListener("click", () => {
    // Event listener for the next button
    if(currentQuestionIndex < questions.length) {
        handleNextButton(); // Proceeds to the next question
    } else{
        startQuiz(); // Restarts the quiz if it has ended
    }
});

startQuiz(); // Starts the quiz when the script is first run