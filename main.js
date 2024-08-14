#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //$
let myPincode = 8402;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please Enter your pin code",
        type: "number"
    }
]);
if (pinAnswer.pin === myPincode) {
    console.log("Pin Code is Correct:)");
    let options = await inquirer.prompt([
        {
            name: "action",
            message: "Please select your desired option",
            type: "list",
            choices: ["withdraw", "checkbalance"]
        }
    ]);
    if (options.action === "withdraw") {
        let balanceanswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Please enter your desired amount",
                type: "number",
            }
        ]);
        if (balanceanswer.amount <= myBalance) {
            myBalance -= balanceanswer.amount;
            console.log("Your remaining balance is: " + myBalance);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (options.action === "checkbalance") {
        console.log(`Your Current Balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin Code is not Correct:(");
}
