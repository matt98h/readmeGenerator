var inquirer = require("inquirer");

// array of objects for questions for the user
inquirer.prompt([
{
        type: `input`,
        name: `github`,
        message: `What is your github account?` 
},
{
    type: `input`,
    name: `email`,
    message: `What is your email address?` 
},
{
    type: `input`,
    name: `title`,
    message: `What is the title of your project?` 
},
{
    type: `input`,
    name: `description`,
    message: `Write a description that describes the purpose of your project.` 
},
{
    type: `list`,
    name: `license`,
    message: `What kind of license should your project have?`, 
    choices: [`MIT`, `APACHE 2.0`,`GPL 3.0`,`BSD 3`,`None`]
}, 
{
    type: `input`,
    name: `installation`,
    message: `What command should be run to install dependencies?` 
},
{
    type: `input`,
    name: `test`,
    message: `What command hsould be run to run tests?` 
},
{
    type: `input`,
    name: `userInfo`,
    message: `Is there anything else the user should know about using this repo?` 
},
{
    type: `input`,
    name: `contributing`,
    message: `What does the user need to know about contributing to the repo?` 
}





// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions









]).then(function(data, err)  {
if(err){
    return console.log (err);
}
console.log(`Success!: `, data);



})

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
