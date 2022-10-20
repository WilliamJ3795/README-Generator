// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

    const questions = [
    {
        type: 'input',
        message: 'Greetings earthlings! Welcome to the README generator! Let\'s get started, please provide your full name.',
        name: 'Name'
        
    },
    {
        type: 'input',
        message: 'Please enter your Github username:',
        name: 'Username'
       
    },
    {
        type: 'input',
        message: 'Name of your project?',
        name: 'Title'
       
    },
    {
        type: 'list',
        message: 'Choose a license for the application:',
        name: 'License',
        choices: ['Unlicense', 'MIT']
       
    },
    {
        type: 'input',
        message: 'Please provide a detailed description of your project:',
        name: 'Description'
        
    },
    {
        type: 'input',
        message: 'How can a user install this application?',
        name: 'Install'
        
    },
    {
        type: 'input',
        message: 'How is this app used?',
        name: 'Usage'
        
    },
    {
        type: 'input',
        message: 'How can the user test the app?',
        name: 'Test'
       
    },
    {
        type: 'input',
        message: 'what are the key features of the application?',
        name: 'Features'
        
    },
    {
        type: 'input',
        message: 'list all collaborators and links to their Github profile:',
        name: 'Contributors'
        
    },
    {
        type: 'input',
        message: 'What tech was used for this project',
        name: 'Tech'
        
    },
    {
        type: 'input',
        message: 'Whats your Email',
        name: 'Mail'
        
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if(err) {
            return console.log(err)
        } else {
            console.log("you did it!")
        }
    })
}





// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();