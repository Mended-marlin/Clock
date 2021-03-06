// TO:DO


// Buttons
const workUp = document.querySelector("#wTimeUp")
const workDown = document.querySelector("#wTimeDown")

const breakUp = document.querySelector("#bTimeUp")
const breakDown = document.querySelector("#bTimeDown")

const start = document.getElementById("start")
const stop = document.getElementById("stop")

// Time Values
const workMin = document.querySelector(".wMin")
const workSec = document.querySelector(".wSec")

const breakMin = document.querySelector(".bMin")
const breakSec = document.querySelector(".bSec")



/******************
* HELPER FUNCTIONS*  
*******************/

function countDown(min, sec)  { 
        const originalMin = min.textContent
        const originalSec = sec.textContent

        var minute = parseInt(min.textContent)
        var second = parseInt(sec.textContent)
    var on = setInterval(() => {
        
    
        console.log(sec)
        
        --second
        sec.textContent = second
        
        if (sec.textContent === "0" && minute > 0){
            sec.textContent = "0" + second
            second = 60
            --minute

        }
        if (parseInt(sec.textContent) < 10 ) {
            sec.textContent = `0${second}`
        }
        if (minute === 0 && second === 0){
            clearInterval(on)
            on = null
            min.textContent = originalMin
            sec.textContent = originalSec

            if (min.textContent === workMin.textContent){
                alert("Are you ready to start the next timer?")
            }
        }
    }, 1000) 
    
}



//Totalling time of selected timer in Milliseconds
function after(min, sec) {
    var betterMin = parseInt(min.textContent) * 60000
    var betterSec = parseInt(sec.textContent) * 1000
    return betterMin + betterSec
}










/******************
  *MAIN PROGRAM*  
*******************/

// Starting the full set when start is clicked
start.addEventListener("click", () => {
    
    // first countdown commences with the work timer
    countDown(workMin, workSec)

    // Starting break timer after waiting full work timer length
    setTimeout(() => countDown(breakMin, breakSec), after(workMin, workSec))
    
    
})


// ADD A COUNTER SO THE USER CAN SEE HOW MANY SETS THEY DID AND GET READY FOR THE HOUR BREAK











// Adding and Removing time with the buttons for Work Length

    // time addition
workUp.addEventListener("click", () => {
    min = parseInt(workMin.textContent)
    sec = parseInt(workSec.textContent)

    if (sec >= 45){


        console.log(sec)
        sec = 0
        workSec.textContent = "00"
        ++min
        workMin.textContent = min
        
        
    }else{
        console.log(sec)
        sec += 15
        workSec.textContent = sec 
    }
    
})

    //time subtraction
workDown.addEventListener("click", () => {
    min = parseInt(workMin.textContent)
    sec = parseInt(workSec.textContent)
        //converting the values into logic fit for time and then doing the proper addition of time when it comes to making or removing a full minute
    if (workSec.textContent === "00"){

        
        --sec
        workSec.textContent = "45"
        --min
        workMin.textContent = min
        
        console.log(sec)
    }else if (workSec.textContent === "15"){
        workSec.textContent = "00"
        sec = 60
    }else{
        console.log(sec)
        sec -= 15
        workSec.textContent = sec 
    }
})

// Adding and Removing time with the buttons for Break Length

    // time addition
    breakUp.addEventListener("click", () => {
        min = parseInt(breakMin.textContent)
        sec = parseInt(breakSec.textContent)
    
        if (sec >= 45){
    
    
            console.log(sec)
            sec = 0
            breakSec.textContent = "00"
            ++min
            breakMin.textContent = min
            
            
        }else{
            console.log(sec)
            sec += 15
            breakSec.textContent = sec 
        }
        
    })
    
        //time subtraction
    breakDown.addEventListener("click", () => {
        min = parseInt(breakMin.textContent)
        sec = parseInt(breakSec.textContent)
            //converting the values into logic fit for time and then doing the proper addition of time when it comes to making or removing a full minute 
        if (breakSec.textContent === "00"){
    
            
            --sec
            breakSec.textContent = "45"
            --min
            breakMin.textContent = min
            
            console.log(sec)
        }else if (breakSec.textContent === "15"){
            breakSec.textContent = "00"
            sec = 60
        }else{
            console.log(sec)
            sec -= 15
            breakSec.textContent = sec 
        }
    })





