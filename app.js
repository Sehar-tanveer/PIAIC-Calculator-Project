#! /usr/bin/env node
import inquirer from 'inquirer';
inquirer
    .prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your first value",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your second value",
    },
    {
        type: "list",
        name: "operation",
        message: "Select one option",
        choices: ["Add", "Subtract", "Multiply", "Divide"]
    },
])
    .then((answers) => {
    if (answers.operation == "Add") {
        const result = answers.num1 + answers.num2;
        console.log("Addition of these numbers are", result);
    }
    else if (answers.operation == "Subtract") {
        const result = answers.num1 - answers.num2;
        console.log("Subtraction of these numbers are", result);
    }
    else if (answers.operation == "Multiply") {
        const result = answers.num1 * answers.num2;
        console.log("Multiplication of these numbers are", result);
    }
    else if (answers.operation == "Divide") {
        const result = answers.num1 / answers.num2;
        console.log("Division of these numbers are", result);
    }
})
    .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    }
    else {
        // Something else went wrong
    }
});
