// // //for loop
// // var i;
// // n=10
// // console.log("The values are: ")
// // for(i=0;i<n;i++)
// // {
// //     console.log(i)
// // }

// // //while loop
// // var sum=0;
// // var i=0;
// // n=10
// // while(i<=n)
// // {
// //     sum+=i;
// //     i++;
// // }
// // console.log("The sum is: "+sum)

// // //do while
// // i=0
// // do{
// //     console.log(i)
// // }while(i>0)


// //example1
// // var i;
// // arr=[10,20,30]
// // for(i=0;i<arr.length;i++)
// // {
// //     console.log(arr[i])
// // }

// // //example2
// // var i;
// // arr=[10,20,30,20.1,20.2]
// // for(i=0;i<arr.length;i++)
// // {
// //     console.log(arr[i])
// // }


// //example 3
// // var i;
// // arr=[10,20,true,false]
// // for(i=0;i<arr.length;i++)
// // {
// //     console.log(arr[i]);
// // }

// //example4
// var i;
// var details=[110,"Kishore","ECE",true,9.3]
// for(i=0;i<details.length;i++)
// {
//     console.log(details[i]);
// }


// //for in loop
var college = new Object()
college["fees"]=100000
college["food_review"]="Poor"
college["hostel_Count"]="10"
college["age"]=20
for(values in college)
{
    console.log(values);
}


// //for of
// for(const values of college)
// {
//     console.log(values);
// }//error

//for of
arr=[10,20,30]
for(const values of arr)
{
    console.log(values);
}

arr.forEach(element => {
    console.log(element)
});