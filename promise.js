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
    return new Promise(function (resolve, fail) {
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
function toss()
{
    return new Promise(function(heads,tail)
        {
            const coin=Math.floor(Math.random()*2)
            if(coin==1)
            {
                heads("Batting")
            }
            else
            {
                tail("Bowling")
            }
        })
}
toss().then(function(win)
{
    console.log("I won I will Choose",win)
})
.catch(function(loss)
{
    console.log(loss,"is your only option")
})