//....In the promise first we will predict some output function and that output function will be called using then and catch for eg.then=>success  catch=>fail

//Eg1 => Authetication Page
function isAuthenticated() {
    return Math.random() > 1;
}
function Login() {
    return new Promise(function (response, noresponse) {
        setTimeout(function () {
            if (isAuthenticated()) {
                response("Your Authentication is Successful");
            } else {
                noresponse("Your Authentication is not Successful");
            }
        }, 1000);
    });
}
Login()
    .then(function (message) {
        console.log(message);
    })
    .catch(function (message) {
        console.log(message);
    });


//Eg:2 => Tatkal train booking
function Tatkal_book() {
    return new Promise(function (resolve, fail) {   //resolve=>then ,fail=>catch 
        const rand = Math.floor(Math.random() * 2)
        //1=>success 0=>failure
        if (rand == 1) {
            resolve(500)
        }
        else {
            fail()
        }
    })
}
Tatkal_book()
    .then(function (amt) {
        console.log("Thanks Buddy! I will send the amount", amt)
    })
    .catch(function () {
        console.log("Ok buudy! I will book bus..")
    })


//Eg=>3.Toss
function toss() {
    return new Promise(function (heads, tail) //heads=>then ,tail=>catch
    {
        const coin = Math.floor(Math.random() * 2)
        if (coin == 1) {
            heads("Batting")
        }
        else {
            tail("Bowling")
        }
    })
}
toss().then(function (win) {
    console.log("I won I will Choose", win)
})
    .catch(function (loss) {
        console.log(loss, "is your only option")
    })


//Eg4:=> Google Maps(location tracking)

function islocationvalid() {
    var v = "valid";
    if (v == "valid") {
        return true
    }
    else {
        return false
    }
}
function location() {
    return new Promise(
        function (responsee, eror) {
            setTimeout(
                function () {
                    loc = "chennai"
                    console.log("Location Entered was: ", loc);
                    if (islocationvalid()) {
                        return responsee("Location Found");
                    }
                    else {
                        return eror("Location not Found");
                    }
                }
                , 2000
            )
        }
    )
}

location()
    .then(function (responsee) {
        console.log(responsee)
    })
    .catch(function (eror) {
        console.log(eror)
    })