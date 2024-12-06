const readline = require('readline-sync');

// Function to calculate PAYE tax 
function calculatePAYE(grossSalary) {
    let tax = 0;

    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10;
    } else if (grossSalary <= 32033) {
        tax = grossSalary * 0.15;
    } else if (grossSalary <= 40000) {
        tax = grossSalary * 0.20;
    } else {
        tax = grossSalary * 0.30;
    }

    return tax;
}

// Function to calculate NHIF deductions
function calculateNHIF(grossSalary) {
    let nhif = 0;

    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else {
        nhif = 1000; //  for salaries above 40,000(example value)
    }

    return nhif;
}

// Function to calculate NSSF deductions
function calculateNSSF(grossSalary) {
    let nssf = 0;

    // NSSF deductions based on salary ranges
    if (grossSalary <= 6000) {
        nssf = grossSalary * 0.06;
    } else if (grossSalary <= 18000) {
        nssf = grossSalary * 0.06; // 6% of gross salary
    } else {
        nssf = 1080; // Maximum cap for NSSF
    }

    return nssf;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE, NHIF, and NSSF
    let paye = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);

    // Calculate net salary
    let netSalary = grossSalary - (paye + nhif + nssf);

    // Output the results
    console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);
    console.log(`PAYE Tax: Ksh ${paye.toFixed(2)}`);
    console.log(`NHIF Deductions: Ksh ${nhif.toFixed(2)}`);
    console.log(`NSSF Deductions: Ksh ${nssf.toFixed(2)}`);
    console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);
}

// Prompt user for basic salary and benefits
const basicSalary = parseFloat(readline.question('Enter your Basic Salary: '));
const benefits = parseFloat(readline.question('Enter your Benefits: '));

console.log(`Calculating salary details for a gross salary of Ksh ${basicSalary + benefits}`);
calculateNetSalary(basicSalary, benefits);
