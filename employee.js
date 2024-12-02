// Function to calculate NHIF deductions (simplified version based on salary ranges)
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
    } else{
        console.log("salary out of range!, should be between 5999 and 40000")
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
        nssf = 1080;
    }

    return nssf;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;

    let paye = calculatePAYE(grossSalary);

    let nhif = calculateNHIF(grossSalary);

    let nssf = calculateNSSF(grossSalary);

    let netSalary = grossSalary - (paye + nhif + nssf);

//output the results
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE Tax: ${paye}`);
    console.log(`NHIF Deductions: ${nhif}`);
    console.log(`NSSF Deductions: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

// Example
let basicSalary = 25000; 
let benefits = 5000;     

calculateNetSalary(basicSalary, benefits);
