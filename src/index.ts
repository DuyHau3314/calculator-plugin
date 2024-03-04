import { readdirSync } from 'fs';
import { join } from 'path';
import readline from 'readline';

interface Operation {
    name: string;
    execute: (a: number, b: number) => number;
}

const operations: Record<string, Operation['execute']> = {
    add: (a, b) => a + b, // Core operation
};

const loadPlugins = () => {
    const pluginsDir = join(__dirname, 'plugins');
    const pluginFiles = readdirSync(pluginsDir).filter(file => file.endsWith('.js'));

    for (const file of pluginFiles) {
        const plugin: Operation = require(join(pluginsDir, file));
        operations[plugin.name] = plugin.execute;
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askQuestion = () => {
    rl.question('Enter operation (add, subtract, multiply) followed by two numbers, or type "exit" to quit: ', answer => {
        if (answer.trim().toLowerCase() === 'exit') {
            rl.close(); // Close the readline interface and exit the program
            return; // Prevent further execution
        }

        const [operation, num1, num2] = answer.split(' ');

        if (operations[operation]) {
            const result = operations[operation](parseFloat(num1), parseFloat(num2));
            console.log(`Result: ${result}`);
        } else {
            console.log('Operation not supported.');
        }

        askQuestion(); // Loop to ask for new operations, only if not exiting
    });
};

const main = () => {
    loadPlugins();
    console.log('Calculator CLI is running.');
    askQuestion();
};

main();
