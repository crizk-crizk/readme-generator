// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: :) Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your username?",
  },
  {
    type: "input",
    name: "age",
    message: "What is your age?",
  },
];

inquirer.prompt(questions).then((answers) => {
  // Use user feedback for... whatever!!

  console.log(answers);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
