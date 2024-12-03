function getCarSpeed(speed){
    //declaring a speed limit of 70
    const speedLimit = 70;
    if(speed < 70){
        /// message output
        console.log("ok");
    }else {
        //demerit points formula
        let demPoints = Math.floor(speed - speedLimit / 5);
        if(demPoints >= 12){
        console.log("License suspended");
        }else{
            console.log(`Current Points : ${demPoints}`);
        }
    }

}
//input speed:
let speed = parseInt(prompt("Enter car speed"));
getCarSpeed(speed);