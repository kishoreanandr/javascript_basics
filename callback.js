//  !!callback!! 

/* A function is embedded in side/called by another function through parameters */

function kishore(welcomeMessage, callback) {
    setTimeout(function() {
        console.log(welcomeMessage)
        callback();
    },1000)
}

function anand() {
    console.log("Please leave the collge!!!");
}

kishore("Hello kishore\nWelcome to KEC", anand)


//Callback
function ramuSomu(welcomeMessage,callback){
    setTimeout(function(){
    console.log(welcomeMessage)
    callback();
    },2000)
    }
    function miniAni(){
    console.log("Odi Poiru vanthudatha da thambi!!!!")
    }
    ramuSomu("Hello Ramu and Somu\nWelcome to Kongu Engineering College",miniAni)

