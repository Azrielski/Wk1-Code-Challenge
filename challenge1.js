function getstudentGrade(studentMarks){
    if(studentMarks > 79){
        return "A"
    } else if (studentMarks >= 60 && studentMarks < 80){
        return "B"
    } else if(studentMarks >= 49 && studentMarks < 60 ){
        return "C"
    } else if(studentMarks >= 40 && studentMarks < 50){
        return "D"
    }else if(studentMarks < 40){
        return "E"
    }
}
//example
const studMark = 75 
console.log(`grade aquired : ${getstudentMarks(marks)}`)
//returns "grade aquired : 75 "