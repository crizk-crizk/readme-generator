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
    case "GNU":
      // code block
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`;
    case "Mozilla Public License 2.0":
      // code block
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "Eclipse Public License 1.0":
      // code block
      return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    default:
      // code block
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      // code block
      return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
    case "Apache 2.0":
      // code block
      return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
    case "GNU":
      // code block
      return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
    case "Mozilla Public License 2.0":
      // code block
      return `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`;
    case "Eclipse Public License 1.0":
      // code block
      return `The Eclipse Public License (EPL) is a free and open source software license most notably used for the Eclipse IDE and other projects by the Eclipse Foundation. It replaces the Common Public License (CPL) and removes certain terms relating to litigations related to patents.`;
    default:
      // code block
      return "";
  }
}

//function to render table of contents
function tableContent(data) {
  return data.tableOfContents
    ? `## Table of Contents 
[Installation Steps](#installation-steps)

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

${renderLicenseBadge(data.license)}

## Description
${data.description}

${tableContent(data)}

## Installation Steps
1. ${data.installation1}
2. ${data.installation2}
3. ${data.installation3}

## Usage
\`\`\`bash
${data.usage}
\`\`\`

## License
${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}



## Contributions

These are all the amazing contributors in this project: ${data.contributors}

If you'd like to contribute, ${data.contributing}

## Tests
${data.test}

## Questions
* Find me on [GitHub](https://github.com/${data.gitHub})
* Emmail me at ${data.email}
`;
}

module.exports = generateMarkdown;
