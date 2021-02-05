// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");
const path = require('path');

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
    name: "tableOfContents",
    message: "Would you like to have a table of contents?",
  },
  //start installation question
  {
    type: "input",
    name: "installation1",
    message: "What is the first step required to install your project?",
  },
  {
    type: "input",
    name: "installation2",
    message: "What is the second step required to install your project? If none, hit enter.",
  },
  {
    type: "input",
    name: "installation3",
    message: "What is the third step required to install your project? If none, hit enter.",
  },
  //end installation question
  {
    type: "input",
    name: "usage",
    message: "Enter the command to launch the application",
  },
  {
    type: "list",
    name: "license",
    message: "Select the type of license",
    choices: ['MIT', 'Apache 2.0', 'GNU', 'Mozilla Public License 2.0', 'Eclipse Public License 1.0']
  },
  {
    type: "input",
    name: "contributors",
    message: "List contributors",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can other contribute to your project?",
  },
  {
    type: "input",
    name: "test",
    message: "Write tests for your application",
  },
  {
    type: "input",
    name: "gitHub",
    message: "Input your GitHub user name",
  },
  {
    type: "input",
    name: "email",
    message: "Input your email address",
  },
];
//FUNCTIONS=======
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //built-in function
  fs.writeFile(path.join(__dirname, fileName), data, (error) => 
  error ? console.error(error) : console.log('File created succesfully!')
  );
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Use user feedback to generate data to pass in generate markdown
    console.log(answers);
    writeToFile("README.md", generateMarkdown(answers));
  });
}
// Function call to initialize app
init();
