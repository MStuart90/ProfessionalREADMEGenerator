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
      name: 'ProjectName',
      message: 'What is your project name?'
    },
    {
      name: 'ProjectDescription',
      message: 'Please write a short description of your project'
    },
    {
      type: 'list',
      name: 'license',
			message: 'What kind of license should your project have? (use arrow keys)',
			choices: ['MIT',
      'APACHE 2.0',
      'GNU GPL v3',
      'BSD 3-Clause License',
      'NONE']
    },
    {
      name: 'command',
      message: 'What command should be run to install dependencies? (npm i) or npm install',
    },
    {
      name: 'needToKnow',
      message: 'what does the user need to know about the repo? npm install then run node index.js',
    },
    {
        name: 'contributing',
        message: 'what does the user need to know about contributing to the repo? open a pull request and we will review it.',
      },
     
  ]);
};

const generateREADME = (answers) => {
return `
# Tabel of contents
## GitHub username
# ${answers.github}
## email
# ${answers.email}
## Project Name
# ${answers.ProjectName}
## Project Description
# ${answers.ProjectDescription}
## License your project has
# ${answers.license}
## commands you should be run to install dependencies
# ${answers.command}
## Information your user needs to know about repo
# ${answers.needToKnow}
## Information about contributing to this repo
# ${answers.contributing}
`;
};


const MIT = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
const APACHE = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
const GNU = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
const BSD = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"


promptUser()
  .then(answers => {
   if(answers.license === 'MIT'){
     answers.license = MIT
   }else if(answers.license === 'APACHE 2.0') {
    answers.license = APACHE
   }else if(answers.license === 'GNU GPL v3') {
    answers.license = GNU
   }else if(answers.license === 'BSD 3-Clause License') {
    answers.license = BSD
   }
   

		const README = generateREADME(answers);
		return writeFileAsync('README2.md', README);
  })
  .then(() => {
    console.log('Successfully wrote to README.md');
  })
	.catch(err => console.log(err));
	

