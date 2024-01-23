//ES6 -> ECMA Script 6 standard
// 1. Var,let,const => refer scope.js


// 2. Arrow Function
var fun=()=>{
    console.log("Hello")
    process.stdout.write("World") // it will print without breaking to next line
}
fun()

// 3.Destructring Operator
var arr=["a",10,"c"]
var [d,e,f]=arr  //it will assign the values to these variables
console.log(d,e,f)

// 4.Spread Operator
var arr1=[...arr,"Kishore"]  //it will add that arr values inside arr1 --> ... indicates how many comes will not know
console.log(arr1)

