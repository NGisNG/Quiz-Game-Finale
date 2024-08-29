const questions = [
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

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");