// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}


## Description
${data.description}
  

## Table of Contents
  *   \`Installation\`
  *   \`Test\`
  *   \`Contribution\`
  
## Installation
\`\`\`
${data.installation}
\`\`\`

## Test
\`\`\`
${data.test}
\`\`\`

## Usage
${data.usage}


## License 
Licensed under the ${data.license} license.

## Contribution Notes
${data.contribution}

## Questions
  *   name: ${data.name}
  *   email: ${data.email}
  *   github: https://www.github.com/${data.github}

`;
}

module.exports = generateMarkdown;
