import pdivisionoftwo from "./division.js";
import productoftwo from "./product.js";
import differnceoftwo from "./subtraction.js";
import exponentoftwo from "./exponential.js";
import additionoftwo from "./addition.js";
import inquirer from 'inquirer';

async function main() {
    const operationChoices = [
        'Addition',
        'Subtraction',
        'Multiplication',
        'Division'
    ];

    const operationPrompt = await inquirer.prompt({
        type: 'list',
        name: 'operation',
        message: 'Select an operation:',
        choices: operationChoices,
    });

    const { operation } = operationPrompt;

    const numberPrompt = await inquirer.prompt([
        {
            type: 'number',
            name: 'num1',
            message: 'Enter the first number:',
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter the second number:',
        },
    ]);

    const { num1, num2 } = numberPrompt;

    let result: number;

    switch (operation) {
        case 'Addition':
            result = additionoftwo(num1, num2);
            break;
        case 'Subtraction':
            result = differnceoftwo(num1, num2);
            break;
        case 'Multiplication':
            result = productoftwo(num1, num2);
            break;
        case 'Division':
            result = pdivisionoftwo(num1, num2);
            break;
        default:
            throw new Error('Invalid operation');
    }

    console.log(`Result: ${result}`);
}

main();