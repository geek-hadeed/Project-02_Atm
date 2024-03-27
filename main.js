#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";


let ask = await inquirer.prompt([
    { message: "Enter Your Account Number",
        name: "accountNumber",
        type: "number" }
]);

let balance1 = 1000;
const myPin1 = 1234;
const ac_No1 = 12345;

let balance2 = 4000;
const myPin2 = 3456;
const ac_No2 = 56789;

let balance3 = 12000;
const myPin3 = 7890;
const ac_No3 = 10112
;
if (ask.accountNumber === ac_No1) 
{
    console.log(chalk.green("Login Successful"));
    console.log(chalk.yellow.bold("Welcome Sir/Mam,Thank You So Much For Coming Back To Our Bank"));
    console.log(`Your Account Balance Is $${balance1}`);
    
    let ask2 = await inquirer.prompt([
    { message: "Enter Your Pin",
            type: "number",
            name: "pin" 
    }
    ]);
    
    if (ask2.pin === myPin1) 
    {
        console.log(chalk.green("Login Successful"));
        let ask3 = await inquirer.prompt([
            {
                message: "Enter Amount",
                type: "number",
                name: "amount"
            }
        ]);
        let ask4 = await inquirer.prompt([
            {
                message: "Whats Your Operation",
                type: "list",
                choices: ["Withdraw", "Deposit"],
                name: "operation"
            }
        ]);
        if (ask4.operation === "Withdraw") {
            if (balance1 >= ask3.amount) {
                console.log(chalk.green(`Now Your Balance Is $${balance1 - ask3.amount}`));
            }
            else
                (balance1 < ask3.amount);
            {
                console.log(chalk.red("Insufficient Balance"));
            }
        }
        else if (ask4.operation === "Deposit") {
            console.log(chalk.green(`Now Your Balance Is $${balance1 + ask3.amount}`));
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
    let ask6 = await inquirer.prompt([
        { message: "Enter Your Pin",
            type: "number",
            name: "pin" }
    ]);
    if (ask6.pin === myPin2) {
        console.log(chalk.green("Login Successful"));
        let ask7 = await inquirer.prompt([
            {
                message: "Enter Amount",
                type: "number",
                name: "amount"
            }
        ]);
        let ask8 = await inquirer.prompt([
            {
                message: "Whats Your Operation",
                type: "list",
                choices: ["Withdraw", "Deposit"],
                name: "operation"
            }
        ]);
        if (ask8.operation === "Withdraw") {
            if (balance2 >= ask7.amount) {
                console.log(chalk.green(`Now Your Balance Is $${balance2 - ask7.amount}`));
            }
            else
                (balance2 < ask7.amount);
            {
                console.log(chalk.red("Insufficient Balance"));
            }
        }
        else if (ask8.operation === "Deposit") {
            console.log(chalk.green(`Now Your Balance Is $${balance2 + ask7.amount}`));
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
    let ask9 = await inquirer.prompt([
        { message: "Enter Your Pin",
            type: "number",
            name: "pin" }
    ]);
    if (ask9.pin === myPin3) {
        console.log(chalk.green("Login Successful"));
        let ask10 = await inquirer.prompt([
            {
                message: "Enter Amount",
                type: "number",
                name: "amount"
            }
        ]);
        let ask11 = await inquirer.prompt([
            {
                message: "Whats Your Operation",
                type: "list",
                choices: ["Withdraw", "Deposit"],
                name: "operation"
            }
        ]);
        if (ask11.operation === "Withdraw") {
            if (balance3 >= ask10.amount) {
                console.log(chalk.green(`Now Your Balance Is $${balance3 - ask10.amount}`));
            }
            else
                (balance3 < ask10.amount);
            {
                console.log(chalk.red("Insufficient Balance"));
            }
        }
        else if (ask11.operation === "Deposit") {
            console.log(chalk.green(`Now Your Balance Is $${balance3 + ask10.amount}`));
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
