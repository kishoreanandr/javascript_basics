//Eg:1=>Async Await demo Example 
async function asAw(){
    var promise = new Promise(
        (response)=>{
            setTimeout(function () {
                response("Example for SYNC/AWAIT");
            }, 1000)
        }
    );
    console.log(await(promise));
}
asAw()


//Eg:2=>Instagram post
async function commentCode() {
    return new Promise(
        function (commentvalue) {
            setTimeout(function () {
                commentvalue("This is my 1st comment icon");
            }, 1000);
        }
    )
}
async function likeCode() {
    return new Promise(function (likevalue) {
        setTimeout(function () {
            likevalue("1st like")
        }, 1000)
    })
}
async function post() {
    var post = new Promise(
        function (postresponse) {
            setTimeout(function () {
                postresponse("This is my First Post");
            }, 3000)
        }
    );
    var [feed,comment,like]=await Promise.all([post,commentCode(),likeCode()])
    console.log(feed); //if we put async you must have to put await otherwise it will print pending
    console.log(comment);
    console.log(like);
}
post()


//Example 3
/*async function likecode()
{
    return new Promise(function(likeresponse,likefail)
    {
        setTimeout(function()
        {
            likeresponse("You Liked");
            likefail("Not Liked");
        },1000)
    })
}

async function postcode()
{
    return new Promise(function(postresponse,postfail)
    {
        setTimeout(function()
        {
            postresponse("You posted");
            postfail("Your post is not uploaded");
        },1000)
    })
    
}*/

//Example:3 => Instgarm post,like,comment,save
async function comment() {
    return new Promise(function (commentpost, commentnotpost) {
        var com = false;
        if (com) {
            setTimeout(function () {
                commentpost("Your comment was posted!..");
            }, 1000);
        } else {
            commentnotpost("Your comment Not posted!.");
        }
    });
}

async function likecod() {
    return new Promise(function (like, Unlike) {
        const likesput = true;
        if (likesput) {
            setTimeout(function () {
                like("You like the post!..");
            }, 1000);
        } else {
            Unlike("Unliked!..");
        }
    });
}

async function postcode() {
    return new Promise((postload, notposted) => {
        const postupload = false;
        if (postupload) {
            setTimeout(() => {
                postload("Your Photo was posted!..");
            }, 1000);
        } else {
            notposted("Your Photo was not posted!.");
        }
    });
}

async function post() {
    try {
        var results= await Promise.allSettled([likecod(),comment(),postcode()])
        results.forEach(result=>
            {
                if(result.status=='fulfilled')
                {
                    console.log(result.value);
                }
                else
                {
                    console.log("Error: ",result.reason)
                }
            });
        }
        catch(error)
        {
            console.log("Error: ",error)
        }
    }

post();
