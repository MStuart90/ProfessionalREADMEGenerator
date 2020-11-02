const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
        name: 'github',
        message: 'Enter your GitHub Username'
    },
    {
      name: 'email',
      message: 'What is your email?'
    },
    {
      name: 'Project',
      message: 'What is your project name?'
    },
    {
      name: 'Project',
      message: 'Please write a short description of your project'
    },
    {
      name: 'license',
      message: 'What kind of license should your project have? (use arrow keys)>MiT
      APACHE 2.0
      GPL 3.0 
      BSD 3
      NONE'
    },
    {
      name: 'command',
      message: 'What command should be run to install dependencies? (npm i) or npm install'
    }
    {
      name: 'Need to know',
      message: 'what does the user need to know about the repo? npm install then run node index.js'
    }
    {
        name: 'contributing',
        message: 'what does the user need to know about contributing to the repo? open a pull request and we'll review it.'
      }
     
  ]);
};


