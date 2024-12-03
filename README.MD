//STUDENT GRADE(CHALLENGE 1)

#function getstudentGrade(studentMarks){} 
=> I used the function getstudentGrade and added the parameter studentMarks so the
function can use it.

#if and else if
= with the use of IF statements, i set up a range for the grades and conditions to it so that the 
function may know where to opperate the and output the values from..
and with the use of the RETURN statements, it is then able to output the grade of the student 

//SPEED CHECK(CHALLENGE 2)
 function getCarSpeed(speed){}
 => this is th function used when a speed value is passed through it will be processed through
 this function
 
 #const speedLimit = 70;
 => I then dceclared the speed limit as 70, using const to declare my variable, this will prevent
 any reassignment to the variable so it basically stays the same throughout the code as that is
 our fixed limit.

 #console.log => to print out the message output.

 #let demPoints = Math.floor(speed - speedLimit / 5);
        if(demPoints >= 12){}
=> Here I decided to declare the demerit points variable to calculate and store the demerit 
points. By the use of MATH.FLOOR, I'm able to make sure my integer is rounded down to the nearest
whole number and not a decimal or float-point.

#(speed - speedLimit / 5)
=> this is the formula used to get the demerit points... deducting the speed by the speed limit 
will allow us to see the difference the speed exceeded from the limit and dividing the anwer by 5
because we are calculating for every 5km the limit is exceeded.

#let speed = parseInt(prompt("Enter car speed"));
getCarSpeed(speed);
=> This is where the user will be prompted to  enter the speed readings and the value is passed through the function getCarSpeed for evaluation... by using parseInt, the number entered as a string will be converted into an integer before processed by the function getCarSpeed.

//CHALLENGE 3
#function calculateNHIF(grossSalary) {}
=> This function is used to calculate nhif deductions based on the gross salary input and outputs the amount nhif will take from the salary.
by initialising nhif to 0 which allows us to update the nhif value as we go through the IF statements.

#function calculateNSSF(grossSalary) {}
=> used to calculate the nssf deductions based on the gross salary.
the interest is 6% contributed and anyone with a gross of over 18000 pays 1080 shillings

#function calculateNetSalary(basicSalary, benefits) 
=> calculating the net salary is by taking the gross salary and subtracting it with the benefits
or the deductions, such as nssf, nhif and the PAYE tax rate 