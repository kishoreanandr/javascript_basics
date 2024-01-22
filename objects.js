/*Objects
Declaring Objects  <!--First Way-->
var student_details={
        "Name":"Kishore",  //key and values
        "Roll_no":"21ECR110",
        "Department":"ECE" // "," is optional 
}
console.log(student_details)   //why inside key doesnot hold any quotes in your object
student_details["phone"]=6380679644
console.log(student_details)
student_details["Name"]="Kishore Anand"
console.log(student_details["Roll_no"])*/

//  !--Second Way--!
/*var customer_Details={}
customer_Details["name"]="Anand"
customer_Details["Rollno"]=110
customer_Details["phone"]=1234567890
console.log(customer_Details)*/

//  !--Third Way--!
var college = new Object()
college["fees"]=100000
college["food_review"]="Poor"
college["hostel_Count"]="10"
college["age"]=20
console.log(college)
console.log(college.hostel_Count)

var kongu = new Object()
kongu["fees"] =100000

kongu["accomodation"] ="bad"
kongu["food"] ="worst"
kongu["hostel count"] =10
console.log(kongu)
console.log(kongu.food)

