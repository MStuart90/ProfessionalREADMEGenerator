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
      name: 'Need-to-know',
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
	# ${answers.github}
	# ${answers.email}
	# ${answers.ProjectName}
	# ${answers.ProjectDescription}
	# ${answers.license}
	# ${answers.command}
	# ${answers.Need-to-know}
	# ${answers.contributing}
`;
};

promptUser()
  .then(answers => {
		const README = generateREADME(answers);
		return writeFileAsync('README2.md', README);
  })
  .then(() => {
    console.log('Successfully wrote to index.html');
  })
	.catch(err => console.log(err));
	


	// promptUser()
  // .then(answers => {
  //   const html = generateHTML(answers);

  //   return writeFileAsync('index.html', html);
  // })
  // .then(() => {
  //   console.log('Successfully wrote to index.html');
  // })
  // .catch(err => console.log(err));



	// var fs = require("fs");

	// fs.writeFile("README.md", answers, function(err) {
	
	// 	if (err) {
	// 		return console.log(err);
	// 	}
	
	// 	console.log("Success!");
	
	// });