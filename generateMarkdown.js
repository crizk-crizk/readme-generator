// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      // code block
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Apache 2.0":
      // code block
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'GNU':
      // code block
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`;
    case 'Mozilla Public License 2.0':
      // code block
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'Eclipse Public License 1.0':
      // code block
      return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    default:
    // code block
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//function to render table of contents
function tableContent(data) {
  return data.tableOfContents
    ? `## Table of Contents 
    [Installation Steps
    ](#installation-steps)
    [Usage](#usage)
    [License](#license)
    [Contributing](#contributing)
    [Tests](#tests)
    [Questions](#questions)
    `
    : null;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

${tableContent(data)}

## Installation Steps
1. ${data.installation1}
2. ${data.installation2}
3. ${data.installation3}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributors}
${data.contributing}

## Tests
${data.test}

## Questions
* Find me on [GitHub](https://github.com/${data.github})
* Emmail me at ${data.email}
`;
}

module.exports = generateMarkdown;
