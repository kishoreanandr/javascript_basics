// //  !!callback!! 

// /* A function is embedded in side/called by another function through parameters */
//Eg:1
// function kishore(welcomeMessage, callback) {
//     setTimeout(function() {
//         console.log(welcomeMessage)
//         callback();
//     },1000)
// }

// function anand() {
//     console.log("Please leave the collge!!!");
// }

// kishore("Hello kishore\nWelcome to KEC", anand)

//Eg:2=>authetication
// //Callback
// function ramuSomu(welcomeMessage,callback){
//     setTimeout(function(){
//     console.log(welcomeMessage)
//     callback();
//     },2000)
//     }
//     function miniAni(){
//     console.log("Odi Poiru vanthudatha da thambi!!!!")
//     }
//     ramuSomu("Hello Ramu and Somu\nWelcome to Kongu Engineering College",miniAni)




//form submit
function form(submitform,database)
{
    setTimeout(function()
    {
        console.log(submitform)
        database();
    },2000);
}
function db()
{
    console.log("Data Base fetched");
}
form("Your form submitted successfully",db)



//eg4=>Instagram
function card(usr, img, lik) {
    setTimeout(function () {
        usr();
        img();
        lik();
    }, 2000);
}

function usr() {
    console.log("hai");
}

function img() {
    console.log("Image fetched");
}

function lik() {
    console.log("Liked!...");
}
card(usr, img, lik);
