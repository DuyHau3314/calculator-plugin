# CLI Arithmetic Calculator with Plugin Support

This project is a CLI-based arithmetic calculator built with TypeScript. It supports basic arithmetic operations like addition and dynamically loads plugins for additional operations such as subtraction and multiplication without needing to restart the application.

## Prerequisites

Ensure you have Node.js and npm installed on your system. You can check by running:

```bash
node --version
npm --version
```

## Installing
First, clone the repository to your local machine:
```bash
git clone https://github.com/DuyHau3314/calculator-plugin.git
```
Navigate into the project directory:
```bash
cd calculator-plugin
```
Install the necessary dependencies:
```bash
npm install
```

## Running the Application
```bash
npm run init-plugin
```

## Using the Calculator
Once the application is running, you will be prompted to enter operations and numbers in the format:
```bash
Enter operation (add, subtract, multiply) followed by two numbers:
```
For example:
```bash
add 5 3
```
To exit the application, type:
```bash
exit
```