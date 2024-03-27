#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let ask = await inquirer.prompt([
    {
        message: "Enter Your Account Number",
        name: "accountNumber",
        type: "number",
    },
]);
let balance1 = 1000;
const myPin1 = 1234;
const ac_No1 = 12345;
let balance2 = 4000;
const myPin2 = 3456;
const ac_No2 = 56789;
let balance3 = 12000;
const myPin3 = 7890;
const ac_No3 = 10112;
if (ask.accountNumber === ac_No1) {
    console.log(chalk.green("Login Successful"));
    console.log(chalk.yellow.bold("Welcome Sir/Mam,Thank You So Much For Coming Back To Our Bank"));
    console.log(`Your Account Balance Is $${balance1}`);
    let askPin = await inquirer.prompt([
        { message: "Enter Your Pin", type: "number", name: "pin" },
    ]);
    if (askPin.pin === myPin1) {
        console.log(chalk.green("Login Successful"));
        let askAmount = await inquirer.prompt([
            {
                message: "Enter Amount",
                type: "number",
                name: "amount",
            },
        ]);
        let askOperator = await inquirer.prompt([
            {
                message: "Whats Your Operation",
                type: "list",
                choices: ["Withdraw", "Deposit"],
                name: "operation",
            },
        ]);
        if (askOperator.operation === "Withdraw") {
            if (balance1 >= askAmount.amount) {
                console.log(chalk.green(`Now Your Balance Is $${balance1 - askAmount.amount}`));
            }
            else {
                console.log(chalk.red("Insufficient Balance"));
            }
        }
        else if (askOperator.operation === "Deposit") {
            console.log(chalk.green(`Now Your Balance Is $${balance1 + askAmount.amount}`));
        }
        else {
            console.log(chalk.red("Invalid Operation"));
        }
    }
    else {
        console.log(chalk.red("Login Failed"));
    }
}
else if (ask.accountNumber === ac_No2) {
    console.log(chalk.green("Login Successful"));
    console.log(chalk.yellow.bold("Welcome Sir/Mam,Thank You So Much For Coming Back To Our Bank"));
    console.log(`Your Account Balance Is $${balance2}`);
    let askPin1 = await inquirer.prompt([
        { message: "Enter Your Pin", type: "number", name: "pin" },
    ]);
    if (askPin1.pin === myPin2) {
        console.log(chalk.green("Login Successful"));
        let askAmount1 = await inquirer.prompt([
            {
                message: "Enter Amount",
                type: "number",
                name: "amount",
            },
        ]);
        let askOperator1 = await inquirer.prompt([
            {
                message: "Whats Your Operation",
                type: "list",
                choices: ["Withdraw", "Deposit"],
                name: "operation",
            },
        ]);
        if (askOperator1.operation === "Withdraw") {
            if (balance2 >= askAmount1.amount) {
                console.log(chalk.green(`Now Your Balance Is $${balance2 - askAmount1.amount}`));
            }
            else {
                console.log(chalk.red("Insufficient Balance"));
            }
        }
        else if (askOperator1.operation === "Deposit") {
            console.log(chalk.green(`Now Your Balance Is $${balance2 + askAmount1.amount}`));
        }
        else {
            console.log(chalk.red("Invalid Operation"));
        }
    }
    else {
        console.log(chalk.red("Login Failed"));
    }
}
else if (ask.accountNumber === ac_No3) {
    console.log(chalk.green("Login Successful"));
    console.log(chalk.yellow.bold("Welcome Sir/Mam,Thank You So Much For Coming Back To Our Bank"));
    console.log(`Your Account Balance Is $${balance3}`);
    let askPin2 = await inquirer.prompt([
        { message: "Enter Your Pin", type: "number", name: "pin" },
    ]);
    if (askPin2.pin === myPin3) {
        console.log(chalk.green("Login Successful"));
        let askAmount2 = await inquirer.prompt([
            {
                message: "Enter Amount",
                type: "number",
                name: "amount",
            },
        ]);
        let askOperator2 = await inquirer.prompt([
            {
                message: "Whats Your Operation",
                type: "list",
                choices: ["Withdraw", "Deposit"],
                name: "operation",
            },
        ]);
        if (askOperator2.operation === "Withdraw") {
            if (balance3 >= askAmount2.amount) {
                console.log(chalk.green(`Now Your Balance Is $${balance3 - askAmount2.amount}`));
            }
            else {
                console.log(chalk.red("Insufficient Balance"));
            }
        }
        else if (askOperator2.operation === "Deposit") {
            console.log(chalk.green(`Now Your Balance Is $${balance3 + askAmount2.amount}`));
        }
        else {
            console.log(chalk.red("Invalid Operation"));
        }
    }
    else {
        console.log(chalk.red("Login Failed"));
    }
}
else {
    console.log(chalk.red("Invalid Account Number"));
}
