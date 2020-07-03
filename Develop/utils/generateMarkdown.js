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
Use the npm install function to install the necessary dependencies to run the program. 

\`\`\`
npm i
\`\`\`

## Usage
${data.usage}


## License 
${data.license}

## Contribution Notes
${data.contribution}

## Tests
${data.test}

## Questions
  *   name: ${data.name}
  *   email: ${data.email}
  *   github: https://www.github.com/${data.github}



* Makes an ul
  * Stars while tabbed make points inside of the points
Two spaces after a line, make a  
clean break

Alternatively, two enter marks define a paragraph break.
Othewise stuff that doesn't include the 2 spaces or 2 line breaks will appear on sane paragrap.

It might be difficult, but consider using \`This\` in order to do the red code look and
\`\`\`
To do big code blocks.
\`\`\`
`;
}

module.exports = generateMarkdown;
