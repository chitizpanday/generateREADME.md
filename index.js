var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');
var util = require('util');


var generateMarkdown = require("./code");
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}               // util.promisify(fs.writeFile);


var Questions = [
  {
    type: "input",
    name: "author",
    message: "who is the author"
  },
  {
    type: "input",
    name: "username",
    message: "what is your Github user name?"
  },
  {
    type: "input",
    name: "email",
    message: "what is your email address?"
  },
  {
    type: "input",
    name: "title",
    message: "what is your project title?"
  },
  {
    type: "input",
    name: "description",
    message: "please provid a brief project description"
  },
  {
    type: "list",
    name: "license",
    message: "what license does the project have",
    choices: [
      "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",

      "APACHE 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) ",
      "GPL 3.0",
      "BSD 3 [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) "
    ]
  },
  {
    type: "input",
    name: "installations",
    message: "what dependencies are need to be installed?"
  },
  {
    type: "input",
    name: "tests",
    message: "what commands are requied to run the test?"
  },
  {
    type: "input",
    name: "usage",
    message: "what is the project usage?"
  },
  {
    type: "input",
    name: "contribute",
    message: "how can users make contributions to the project?"
  },
];

function generateMD(data) {
  return `# ${data.title}
  ${data.description}
  ## Table of contents:
  ### *[Installation](#installation)

  ### *[Usage](#usage)

  ### *[License](#license)

  ### *[Contributing](#contributing)

  ### *[Tests](#tests)

  ### *[Questions](#questions)

  ### Installation:

   To install the necessary dependencies, open the terminal and run the following:
  ${data.installations}
  ### Usage:
  ${data.usage}
  ### License:
  this project is licensed under:
  ${data.license}
  ### Contributing:
  ${data.contribute}
  ### Tests:
  In order to test, open the console and run the following:
  ${data.tests}
  ### Questions:
  If you have any questions, please contact me at [Github](https://github.com/${data.username}) or contact ${data.author} at ${data.email}`

}


function whatever() {
  inquirer.prompt(Questions).then(inquirerResponse => {
    console.log(inquirerResponse);
    var markDownData = generateMD({ ...inquirerResponse });
    writeToFile("README.md", markDownData)
  })
}
whatever();



