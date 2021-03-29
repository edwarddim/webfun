// DRY - DON'T REPEAT YOURSELF

const arrA1 = ["a", "b"];
const arrB1 = [1, 2, 3];
const expected1 = ["a", "b", 1, 2, 3];

function print1to50(){
    for(var i = 1; i < 51; i++){
        console.log(i)
    }
}
// print1to50()

// DEFINE FUNCTION
function concat(arr1, arr2){
    var result = []
    for(var i = 0; i < arr1.length;i++){
        result.push(arr1[i])
    }
    for(var j = 0; j < arr2.length;j++){
        result.push(arr2[j])
    }
    return result
}
// CALLING(EXECUTING) THE FUNCTION
// var answer1 = concat( [1,2,3] , ["b", "c"] )
// console.log(answer1)

// console.log( concat( ["c", "d"] , [4,5,6] ) )
// concat(arrA1, arrB1)


function test(num){
    if(num < 5){
        return "Hello"
    }
    else if(num == 7){
        return "Lucky"
    }
    else{
        return "Nothing"
    }
}
// console.log(test(9))
// console.log(test(5))
// console.log(test(2))


// ARRAYS - ORDERED DATA STRUCTURE


// OBJECTS - UNORDERED DATA STRUCTURE
var myArr = ["Edward Im", 30, "Bootcamp Instructor", "Python"]
console.log(myArr[2])
console.log(myArr[1])

var myObj = {
    'full_name' : "Edward Im",
    'age' : 30,
    'occupation' : "Bootcamp Instructor",
    'fav_languages' : ["Python", "JS", "Java"]
}

console.log(myObj.fav_languages)

var newVar = myObj.fav_languages
for(var i = 0; i < newVar.length; i++){
    console.log(newVar[i])
}

for(var language of myObj.fav_languages){
    console.log(language)
}



// console.log(myObj["full_name"])
// console.log(myObj.full_name)

// console.log(myObj['age'])
// console.log(myObj.age)

// console.log(myObj['occupation'])
// console.log(myObj.occupation)
// CREATE A NEW KEY VALUE PAIR
myObj.fav_hobby = "basektball"
// myObj['fav_hobby'] = "basketball"

delete myObj['age']
console.log(myObj)


var peopleList = [
    {
        "full_name" : "Edward Im",
        "age" : 30
    },
    {
        "full_name" : "Jane Doe",
        "age" : 30
    },
    {
        "full_name" : "John Doe",
        "age" : 30
    },
]

// STANDARD FOR LOOPS ARE BEST FOR MANIPULATING DATA
for( var i =0; i < peopleList.length;i++){
    console.log("FULL NAME: "  + peopleList[i].full_name)
    console.log("AGE: "  + peopleList[i].age)
}

// ADVANCED FOR LOOPS ARE BEST FOR READING DATA
for(var user of peopleList){
    if(user.full_name == "Edward Im"){
        console.log("Found you!")
    }
    else{
        console.log("Looking for someone else")
    }
}