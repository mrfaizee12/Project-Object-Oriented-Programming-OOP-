#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.bgBlueBright.bold.italic("\n \t\t Welcome to the world of Object-Oriented Programming!\n"));
        const sol = await inquirer.prompt({
            name: "selection",
            message: "Whom would you like to interact with?",
            type: "list",
            choices: ["Staff", "Student", "Exit..."]
        });
        if (sol.selection === "Staff") {
            console.log(chalk.green("You approach the staff room. Feel free to ask any question you have."));
        }
        else if (sol.selection === "Student") {
            const sol = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the name of the student you wish to engage with:"
            });
            const student = persons.students.find(value => value.name === sol.student);
            if (!student) {
                const name = new Student(sol.student);
                persons.addStudent(name);
                console.log(chalk.bgYellow.bold(`Greetings! I am ${name.name}. It's a pleasure to meet you!`));
                console.log(chalk.bgMagenta.bold("A new student has been added to the roster."));
                console.log(chalk.bgCyan.bold("Current list of students:"));
                persons.students.forEach(student => console.log(chalk.cyan(student.name)));
            }
            else {
                console.log(chalk.bgGreen(`Hello again! I am ${student.name}. Nice to see you back!`));
                console.log(chalk.bgCyan("List of existing students:"));
                persons.students.forEach(student => console.log(chalk.cyan(student.name)));
            }
        }
        else if (sol.selection === "Exit...") {
            console.log(chalk.red("Exiting the program... Goodbye!"));
            process.exit();
        }
    } while (true);
};
programStart(persons);
