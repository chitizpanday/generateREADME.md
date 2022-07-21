var inquirer = require('inquirer');
var fs = require('fs');
var util = require('util');

util.promisify(fs.writeFile);

var Questions = () =>
inquirer.Prompt([
{
type:"input",
name: "author",
message: "who is the author"
},
{
  type:"input",
name: "username",
message: "what is your Github user name?"
},
{
  type:"input",
  name: "email",
  message: "what is your email address?"
},
{
  type:"input",
name: "title",
message: "what is your project title?"
},
{
  type:"input",
name: "description",
message: "please write a brief project description"
},
{
  type:"input",
name: "license",
message: "what license does the project have"
},
{
  type:"input",
name: "installations",
message: "what dependencies and commands are required?"
},
{type:"input",
name: "tests",
message: "what commands are requied to run the test?"
},
{  type:"input",
name: "usage",
message: "what is the usage of the project?"
},
{  type:"input",
name: "contribute",
message: "how can a user contribute to the project?"
},
]);

function generateMD(data){
  return `# ${data.title}
  ${badge}
  ${data.description}
  ## Table of contents:
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](questions)
  ###Installation:
  In order to install the necessary dependencies, open the consol and run the following:
  \`\`\`${data.installations}\`\`\`
  ### Usage:
  ${data.usage}
  ### License:
  this project is licensed under:
  ${data.license}
  ### Contributing:
  ${data.contribute}
  ### Tests:
  In order to test, open the console and run the following:
  \`\`\`${data.tests}\`\`\`
  ### Questions:
  If you have any questions, please contact me at [Github](https://github.com/${data.username}) or contact ${data.author} at ${data.email}`

}

Questions()
.then((data) => writeFileAsync('generatedREADME.md', generateMD(data)))
.then(() => console.log ("successfully wrote to index,html"))
.catch((errr) => console.error (err));






// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
