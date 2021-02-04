// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project",
  },
  {
    type: "confirm",
    name: "table of contents",
    message: "Would you like to have a table of contents?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Providde instructions and example for use",
  },
  {
    type: "input",
    name: "license",
    message: "Select the type of license",
  },
  {
    type: "input",
    name: "Contributors",
    message: "List contributors",
  },
  {
    type: "input",
    name: "test",
    message: "Write tests for your application",
  },
];
//FUNCTIONS=======

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  fs.appendFile(fileName, answers, (error) => 
  error ? console.error(error) : console.log()
  );
  
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    writeToFile("README.md", generateMarkdown(answers));
  });
  
}

// Function call to initialize app
init();
