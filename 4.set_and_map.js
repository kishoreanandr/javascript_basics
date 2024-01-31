/*#############----------Set---------#############*/

//obj=new obj()
//set->collection of unique elements


//it will take the index of first element only
setExample=new Set("KISHORE","ANAND")
console.log(setExample)

//it will take entire set because of array syntax
setExample=new Set(["KISHORE","ANAND"])
setExample.add("21ECR110")
setExample.add("KISHORE") //it will add the element
console.log(setExample)

//using for in loop
for(values in setExample)
{
    console.log(values)
}

//using for of loop
for(values of setExample)
{
    console.log(values)
}

//using foreach loop
setExample.forEach(element => {
    console.log(element)
});




/*#############----------Maps---------#############*/

//Map Example

//mapEg=new Map() => we should not put like this !!!   mapEg=new Map([])   we should not put like this !!! beacuse it will not identify id
mapEg = new Map([
    ["id", "21ECR110"],
    ["Name","KISHORE ANAND"]
])

console.log(mapEg.has("Name")) //if key is present it will show true
mapEg.set("num","110") //it will add the element
mapEg.delete("num")  //it will delete the element
console.log(mapEg)
//for in
for(element in mapEg)
{
    console.log(element)
}

//for of
for(element of mapEg)
{
    console.log(element)
}

