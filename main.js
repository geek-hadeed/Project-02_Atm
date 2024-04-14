#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let balance1 = 1000;
const myPin1 = 12345;
const ac_No1 = 12345;
let balance2 = 4000;
const myPin2 = 56789;
const ac_No2 = 56789;
let balance3 = 12000;
const myPin3 = 10112;
const ac_No3 = 10112;
console.log(chalk.bgWhite.blackBright.bold `


.------------------. .-----------------. .-----------------.
| .--------------. || .--------------. || .--------------. |
| |      __      | || |  _________   | || | ____    ____ | |
| |     /  \\     | || | |  _   _  |  | || ||_   \\  /   _|| |
| |    / /\\ \\    | || | |_/ | | \\_|  | || |  |   \\\/   |  | |
| |   / ____ \\   | || |     | |      | || |  | |\\  /| |  | |
| | _/ /    \\ \\_ | || |    _| |_     | || | _| |_\\/_| |_ | |
| ||____|  |____|| || |   |_____|    | || ||_____||_____|| |
| |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' |
'------------------' '-----------------' '-----------------'

`);
console.log(`I Have Three Users 1.${ac_No1} , 2.${ac_No2} and 3.${ac_No3}`);
console.log('And The Secret Is That Account Number Is Pin \n\n');
let ask = await inquirer.prompt([
    {
        message: "Enter Your Account Number",
        name: "accountNumber",
        type: "number",
    },
]);
if (ask.accountNumber === ac_No1) {
    console.log(chalk.green("Login Successful"));
    console.log(chalk.yellow.bold("Welcome Sir/Mam,Thank You So Much For Coming Back To Our Bank"));
    console.log(`Your Account Balance Is $${balance1}`);
    let askPin = await inquirer.prompt([
        { message: "Enter Your Pin", type: "number", name: "pin" },
    ]);
    if (askPin.pin === myPin1) {
        console.log(chalk.green("Login Successful"));
        let askOperator = await inquirer.prompt([
            {
                message: "Whats Your Operation",
                type: "list",
                choices: ["Withdraw", "Deposit", "Fast Cash", "Exit"],
                name: "operation",
            },
        ]);
        if (askOperator.operation === "Withdraw") {
            let askAmount = await inquirer.prompt([
                {
                    message: "Enter Amount",
                    type: "number",
                    name: "amount",
                },
            ]);
            if (balance1 >= askAmount.amount) {
                console.log(chalk.green(`Now Your Balance Is $${balance1 - askAmount.amount}`));
            }
            else {
                console.log(chalk.red("Insufficient Balance"));
            }
        }
        else if (askOperator.operation === "Deposit") {
            let askAmount = await inquirer.prompt([
                {
                    message: "Enter Amount",
                    type: "number",
                    name: "amount",
                },
            ]);
            console.log(chalk.green(`Now Your Balance Is $${balance1 + askAmount.amount}`));
        }
        else if (askOperator.operation === "Fast Cash") {
            let askFastCash = await inquirer.prompt([
                {
                    message: "Enter Amount",
                    type: "list",
                    choices: ["500", "1000", "2000", "5000"],
                    name: "fastCash",
                },
            ]);
            if (askFastCash.fastCash === "500") {
                if (balance1 >= 500) {
                    console.log(chalk.green(`Now Your Balance Is $${balance1 - 500}`));
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
            else if (askFastCash.fastCash === "1000") {
                if (balance1 >= 1000) {
                    console.log(chalk.green(`Now Your Balance Is $${balance1 - 1000}`));
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
            else if (askFastCash.fastCash === "2000") {
                if (balance1 >= 2000) {
                    console.log(chalk.green(`Now Your Balance Is $${balance1 - 2000}`));
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
            else if (askFastCash.fastCash === "5000") {
                if (balance1 >= 5000) {
                    console.log(chalk.green(`Now Your Balance Is $${balance1 - 5000}`));
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
            else if (askOperator === "Exit") {
                console.log(chalk.green("Thank You For Using Our Bank"));
                process.exit(0);
            }
            else {
                console.log(chalk.red("Invalid Operation"));
            }
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
        let askOperator1 = await inquirer.prompt([
            {
                message: "Whats Your Operation",
                type: "list",
                choices: ["Withdraw", "Deposit"],
                name: "operation",
            },
        ]);
        if (askOperator1.operation === "Withdraw") {
            let askAmount1 = await inquirer.prompt([
                {
                    message: "Enter Amount",
                    type: "number",
                    name: "amount",
                },
            ]);
            if (balance2 >= askAmount1.amount) {
                console.log(chalk.green(`Now Your Balance Is $${balance2 - askAmount1.amount}`));
            }
            else {
                console.log(chalk.red("Insufficient Balance"));
            }
        }
        else if (askOperator1.operation === "Deposit") {
            let askAmount1 = await inquirer.prompt([
                {
                    message: "Enter Amount",
                    type: "number",
                    name: "amount",
                },
            ]);
            console.log(chalk.green(`Now Your Balance Is $${balance2 + askAmount1.amount}`));
        }
        else if (askOperator1.operation === "Fast Cash") {
            let askFastCash = await inquirer.prompt([
                {
                    message: "Enter Amount",
                    type: "list",
                    choices: ["500", "1000", "2000", "5000"],
                    name: "fastCash",
                },
            ]);
            if (askFastCash.fastCash === "500") {
                if (balance2 >= 500) {
                    console.log(chalk.green(`Now Your Balance Is $${balance2 - 500}`));
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
            else if (askFastCash.fastCash === "1000") {
                if (balance2 >= 1000) {
                    console.log(chalk.green(`Now Your Balance Is $${balance2 - 1000}`));
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
            else if (askFastCash.fastCash === "2000") {
                if (balance2 >= 2000) {
                    console.log(chalk.green(`Now Your Balance Is $${balance2 - 2000}`));
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
            else if (askFastCash.fastCash === "5000") {
                if (balance2 >= 5000) {
                    console.log(chalk.green(`Now Your Balance Is $${balance2 - 5000}`));
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
        }
        else if (askOperator1 === "Exit") {
            console.log(chalk.green("Thank You For Using Our Bank"));
            process.exit(0);
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
        let askOperator2 = await inquirer.prompt([
            {
                message: "Whats Your Operation",
                type: "list",
                choices: ["Withdraw", "Deposit"],
                name: "operation",
            },
        ]);
        if (askOperator2.operation === "Withdraw") {
            let askAmount2 = await inquirer.prompt([
                {
                    message: "Enter Amount",
                    type: "number",
                    name: "amount",
                },
            ]);
            if (balance3 >= askAmount2.amount) {
                console.log(chalk.green(`Now Your Balance Is $${balance3 - askAmount2.amount}`));
            }
            else {
                console.log(chalk.red("Insufficient Balance"));
            }
        }
        else if (askOperator2.operation === "Deposit") {
            let askAmount2 = await inquirer.prompt([
                {
                    message: "Enter Amount",
                    type: "number",
                    name: "amount",
                },
            ]);
            console.log(chalk.green(`Now Your Balance Is $${balance3 + askAmount2.amount}`));
        }
        else if (askOperator2.operation === "Fast Cash") {
            let askFastCash = await inquirer.prompt([
                {
                    message: "Enter Amount",
                    type: "list",
                    choices: ["500", "1000", "2000", "5000"],
                    name: "fastCash",
                },
            ]);
            if (askFastCash.fastCash === "500") {
                if (balance3 >= 500) {
                    console.log(chalk.green(`Now Your Balance Is $${balance3 - 500}`));
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
            else if (askFastCash.fastCash === "1000") {
                if (balance3 >= 1000) {
                    console.log(chalk.green(`Now Your Balance Is $${balance3 - 1000}`));
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
            else if (askFastCash.fastCash === "2000") {
                if (balance3 >= 2000) {
                    console.log(chalk.green(`Now Your Balance Is $${balance3 - 2000}`));
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
            else if (askFastCash.fastCash === "5000") {
                if (balance3 >= 5000) {
                    console.log(chalk.green(`Now Your Balance Is $${balance3 - 5000}`));
                }
                else {
                    console.log(chalk.red("Insufficient Balance"));
                }
            }
            else if (askOperator2 === "Exit") {
                console.log(chalk.green("Thank You For Using Our Bank"));
                process.exit(0);
            }
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
