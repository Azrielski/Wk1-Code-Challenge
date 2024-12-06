const prompt = require("prompt-sync")();
//User input 
let studentMarks = parseInt(prompt("Enter student marks between 0 - 100: "));

// Grade function to get the grade 
function getstudentGrade(studentMarks) {
    if (studentMarks > 79) {
        return "A";
    } else if (studentMarks >= 60 && studentMarks < 80) {
        return "B";
    } else if (studentMarks >= 49 && studentMarks < 60) {
        return "C";
    } else if (studentMarks >= 40 && studentMarks < 50) {
        return "D";
    } else if (studentMarks < 40) {
        return "E";
    }
}
// printing grade based on the iput
console.log(`Grade acquired: ${getstudentGrade(studentMarks)}`);
