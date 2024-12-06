const readline = require('readline-sync');
// Function to evaluate car speed and calculate demerit points
function getCarSpeed(speed) {
    // declaring a speed limit of 70
    const speedLimit = 70;

    // Check if the speed is less than the speed limit
    if (speed <= speedLimit) {
        console.log("OK");
    } else {
        // Calculate demerit points using the correct formula
        let demPoints = Math.floor((speed - speedLimit) / 5); // Correct the formula

        // Check if the points are above the threshold for license suspension
        if (demPoints >= 12) {
            console.log("License suspended");
        } else {
            console.log(`Current Points: ${demPoints}`);
        }
    }
}

// Input speed (for a browser environment using prompt)
let speed = parseInt(readline.question("Enter car speed: "));

// Check if the input is valid (speed should be a number)
if (isNaN(speed)) {
    console.log("Please enter a valid number for speed.");
} else {
    getCarSpeed(speed);
}
