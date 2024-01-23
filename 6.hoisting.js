//   !...Variable hoisting...!

console.log(a)  //reference error if a is not declared in full coding 
var a=10   //if it is declared in global variable,the above output will be undefined because it will create a memory  

//reference error it will not create memory
//let a=10 


// !...Functional Hoisting...!
clg()
function clg()
{
    var b=10 //if it is used in function it will not access it in outside
    console.log(b)
}
console.log(b)

