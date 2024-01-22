//localscope
for(let i=0;i<2;i++)
{
    console.log(i)
}
// console.log(i) => let will work only in that particular function only(reference error)//interview question

//globalscope
var a=10 //it is a global scope
console.log(a);
{
    let a=5;
    let b=5;
    console.log(a); //it is a localscope
    console.log(b);
}
console.log(a);  // var work in global
// console.log(b);  => let will work in function only


//block scope
function add()
{
    var c=10;
    var d=20;
    console.log(c);
    console.log(d);
}
console.log(c); //that c will work only inside that fucntion it is called block scope