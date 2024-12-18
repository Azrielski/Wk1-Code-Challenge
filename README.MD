WEEK 1 CODE CHALLENGE
In this repo you will find 1 folder by the name node_modules, and 6 files: README.MD,--- StudentGrade.js, ---employee.js, ---package.js,--- package-lock.json, --- speedcheck.js.

inside the node_modules folder , you will find folders that involve the prompt-sync, readline-sync and readline packages that are required to be installed inorder to run the programs needed.

//Net Salary Calculator
This is a simple Net Salary Calculator program written in JavaScript. It calculates the net salary of an individual based on their basic salary, benefits, and statutory deductions in Kenya, including:

PAYE (Pay-As-You-Earn) Tax
NHIF (National Hospital Insurance Fund) Deductions
NSSF (National Social Security Fund) Deductions
The program uses the following input from the user:

*Basic Salary
Benefits (e.g., allowances)
The calculator outputs:

*Gross Salary
PAYE Tax
NHIF Deductions
NSSF Deductions
Net Salary
//How to Run the Program
Ensure you have Node.js installed on your computer.
Save the code in a file, e.g., netSalaryCalculator.js.
Open your terminal and navigate to the directory where the file is saved.
Run the program using the command:
bash

node netSalaryCalculator.js
Follow the prompts to enter:
Your Basic Salary
Your Benefits
The program will calculate and display your net salary along with detailed deductions.

*How the Program Works
1. PAYE Calculation
The PAYE tax rates are applied based on the gross salary:

10% for salaries up to Ksh 24,000
15% for salaries between Ksh 24,001 and Ksh 32,033
20% for salaries between Ksh 32,034 and Ksh 40,000
30% for salaries above Ksh 40,000
2. NHIF Deductions
NHIF contributions are calculated based on the gross salary, with fixed rates for different salary brackets. For example:

Ksh 150 for salaries up to Ksh 5,999
Ksh 1,000 for salaries above Ksh 40,000
3. NSSF Deductions
NSSF contributions are capped at 6% of the gross salary up to a maximum of Ksh 1,080.

4. Net Salary Calculation
Net Salary is calculated using the formula:

Net Salary = Gross Salary - (PAYE + NHIF + NSSF)
Example Usage
Input:
Enter your Basic Salary: 50000
Enter your Benefits: 5000

Output:
Calculating salary details for a gross salary of Ksh 55000
Gross Salary: Ksh 55000.00
PAYE Tax: Ksh 16500.00
NHIF Deductions: Ksh 1000.00
NSSF Deductions: Ksh 1080.00
Net Salary: Ksh 36420.00
Notes
Assumptions:

NHIF and PAYE rates are based on Kenyan regulations.
NSSF contributions follow a maximum cap of Ksh 1,080.
The rates may vary depending on updates to the Kenyan tax system.
Dependencies:

The program uses the readline-sync package for user input. Ensure this package is installed by running:
bash

npm install readline-sync



//Speed Checker with Demerit Points
This is a simple Speed Checker program written in JavaScript. The program evaluates a car's speed, checks if it exceeds the speed limit, and calculates demerit points if necessary. If the demerit points reach a specific threshold, the program also determines whether the driver's license should be suspended.

*Features
Speed Evaluation:

Checks if the car's speed is within the allowed limit (default: 70 km/h).
Displays "OK" if the speed is within the limit.
Demerit Points Calculation:

For every 5 km/h above the speed limit, 1 demerit point is added.
If the total demerit points reach or exceed 12 points, the driver's license is suspended.
Validation:

Ensures the user provides a valid numerical input for speed.
How to Run the Program
Prerequisites
Node.js must be installed on your computer.
Save the code in a file, e.g., speedChecker.js.
Steps
Open a terminal and navigate to the directory where the file is saved.
Run the program using:
bash
Copy code
node speedChecker.js
Enter the car's speed when prompted.

*Input and Output

Input:
The user is prompted to input the car's speed (as a number).
Output:
For speeds within the limit (≤ 70 km/h):
OK
For speeds exceeding the limit:

Displays the calculated demerit points.

Current Points: <demerit_points>
If demerit points are 12 or more:


License suspended
For invalid inputs:


Please enter a valid number for speed.
Example Usage
Case 1: Speed = 65
Input:


Enter car speed: 65
Output:
OK
Case 2: Speed = 85

Input:
Enter car speed: 85
Output:
Current Points: 3
Case 3: Speed = 130

Input:
Enter car speed: 130
Output:
License suspended

Case 4: Invalid Input
Input:
Enter car speed: fast
Output:
Please enter a valid number for speed.

*How the Program Works
The program uses a constant speed limit of 70 km/h.
If the car's speed is:
Less than or equal to 70 km/h: Displays "OK".
Greater than 70 km/h: Calculates demerit points using:
javascript
Math.floor((speed - speedLimit) / 5)
If demerit points reach or exceed 12, the driver's license is marked as "suspended".
Invalid inputs (e.g., non-numerical values) are handled with an error message.
Notes
Assumptions:

Speed is entered as a whole number (integer).
Speed limit is constant at 70 km/h but can be modified in the code.
Dependencies:

The program uses the readline-sync package for input. Install it using:
bash
Copy code
npm install readline-sync.



//Student Grade Calculator
This is a simple Student Grade Calculator program written in JavaScript. The program takes the marks of a student as input (ranging between 0 and 100) and assigns a corresponding grade based on predefined grading criteria.

*Features

*Grading System:
Accepts student marks as input.
Determines the grade based on the following criteria:
A: Marks greater than 79
B: Marks between 60 and 79 (inclusive)
C: Marks between 49 and 59 (inclusive)
D: Marks between 40 and 49 (inclusive)
E: Marks less than 40
Input Validation:

Ensures the input is a valid number within the range 0–100.
How to Run the Program
Prerequisites
Node.js must be installed on your computer.
Save the code in a file, e.g., studentGradeCalculator.js.
Steps
Open a terminal and navigate to the directory where the file is saved.
Run the program using:
bash
node studentGradeCalculator.js
Enter the student marks (an integer between 0 and 100) when prompted.
Input and Output
Input:
The user is prompted to input the student's marks as a number between 0 and 100.
Output:
The program outputs the grade corresponding to the input marks.
Example Usage
Case 1: Marks = 85
Input:
Enter student marks between 0 - 100: 85
Output:
Grade acquired: A
Case 2: Marks = 73
Input:
Enter student marks between 0 - 100: 73
Output:
Grade acquired: B
Case 3: Marks = 52

Input:
Enter student marks between 0 - 100: 52
Output:
Grade acquired: C
Case 4: Marks = 48

Input:
Enter student marks between 0 - 100: 48
Output:
Grade acquired: D
Case 5: Marks = 32

Input:
Enter student marks between 0 - 100: 32
Output:
Grade acquired: E

Notes
Assumptions:
The input is an integer between 0 and 100. No validation is implemented for invalid inputs (e.g., strings or values outside the range). This can be added as an enhancement.
Dependencies:
The program uses the prompt-sync package for user input. Install it using:
bash
npm install prompt-sync
How the Program Works
User Input:

The program prompts the user to input the student's marks.
The marks are parsed as an integer using parseInt.
Grading Logic:

The program evaluates the marks using a series of if-else conditions.
A grade (A, B, C, D, or E) is assigned based on the range the marks fall into.
Output:

The calculated grade is printed to the console.

License
This project is open source and free to use.

Author
Developed by Victor Azriel Ngae.


