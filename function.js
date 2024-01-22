// !...Functions...!


// Functions without arguments and return type
function add()
{
    var a=10;
    var b=10;
    console.log("The addition is: ",a+b)
}
add()

// Functions with arguments and without return type

function evenorodd(a,b)
{
    var i;
    var count=0
    var count1=0
    console.log("The even numbers are:")
    for(i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log(i)
            count+=1
        }
    }
    console.log("The odd numbers are:")
    for(i=a;i<b;i++)
    {
        if(i%2!=0)
        {
            console.log(i)
            count1+=1
        }
    }
    console.log("The count of even number is:",count)
    console.log("The count of odd number is:",count1)
}
evenorodd(1,10)



// Functions without arguments and with return type
function addWithReturnType() {
    var c = 10;
    var d = 10;
    return c + d;
}

console.log("The addition is: ", addWithReturnType());


// Functions with arguments and  return type
function add(num1,num2)
{
    return num1+num2
}
console.log("The addition is: ",add(20,30))