//Assignment Operator
var a=100;
console.log("Assignment Operator:",a)

//Arithmetic operator
var aA=20
var bB=10
console.log("Arithmetic Operator for addition:",aA+bB)
console.log("Arithmetic Operator for subtraction:",aA-bB)
console.log("Arithmetic Operator for multiplication:",aA*bB)
console.log("Arithmetic Operator for quiotent:",aA/bB)
console.log("Arithmetic Operator for remainder:",aA%bB)

//Logical Operator -> &&,||,!
var aa=10
var bb="KISHORE"
console.log("Logical Operator: ",aa&&bb)
console.log("Logical Operator: ",aa||bb)
console.log("Logical Operator: ",!aa)

//&& Operator
// console.log(10&&20)
// console.log(10&&30)
// console.log(10&&0)
// console.log(0&&10)

// or operator
// console.log(10||20)
// console.log(0||20)
// console.log(20||0)
// console.log(100||20&&0)
console.log((100||20)&&0)
console.log((100||0)&&20)
console.log((100&&0)||20)
console.log((100&&100)&&20)


Relational Operator->  <,>,<=,>=,===,!==, Output=> True/False
aR=10
bR=30
aRR="Hai"
bRR="Hai"
console.log("Relational Operator > is: ",aR>bR);
console.log("Relational Operator < is: ",aR<bR);
console.log("Relational Operator >= is: ",aR>=bR);
console.log("Relational Operator <= is: ",aR<=bR);
console.log("Relational Operator == is: ",aRR==bRR);
console.log("Relational Operator != is: ",aR!=bR);
console.log("Relational Operator === is: ",aRR===bRR);
console.log("Relational Operator !== is: ",aRR!==bRR);



/*Interview question why do we need three dots in between do and while Ans=> we donot know how loops exist do...while*/
 //conditional statements => if else....
 var a=10
 var b=20
 if(a==b)
 {
    console.log("Operator a is equal to b");
 }
 else if(a>b)
 {
    console.log("A is greater than B");
 }
 else if(a<b)
 {
    console.log("B is greater than A");
 }
 else
 {
    console.log("It is Invalid");
 }