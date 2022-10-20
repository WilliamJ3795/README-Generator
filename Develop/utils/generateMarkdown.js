// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  if (license === 'Unlicense') {
    return ''
  }
  if (license === "MIT") {
    return '![License: MIT](https://img.sheilds.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  - ${data.Name}
  - https://github.com/${data.Username}/${data.Title}


  ## Description
  
  - ${data.Description}

  ## Table of Contents
  - [License](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Tests](#tests)
  - [Credits](#contributors&credit)
  - [Tech](#tech)
  - [Questions](#questions)

  ## License

  - ${renderLicense(data.License)}

  Refer to [https://choosealicense.com/](https://choosealicense.com/),

  ## Installation
  To install this apllication, please follow the steps below:
  - ${data.Install}

  ## Usage

  In order to use this app, ${data.Usage}

  ## Features

  - ${data.Features}

  ## Test

  - ${data.Test}

  ## Contributors & Credit

  - ${data.Contributors}

  # Tech

  - ${data.Tech}

  ## Questions
  if you have any questions about the repo, open an issue or contact me directly at ${data.Mail}.


`;
}

module.exports = generateMarkdown;
