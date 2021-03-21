// WORKING WITH OBJECTS
// JSON => JAVASCRIPT OBJECT NOTATION

var array = [1,2,3,4,5,6]
console.log(array[2])
// INDEX -> VALUE

var user = ['Edward Im', 29, '123 Hello', 'Boise', 'ID']

var humanObj = {
    'height': "5ft 10in",
    'age' : 29,
    'name' : 'Edward Im',
    'phone_num' : '555-555-5555',
    'address': {
        'street_address': '123 W Hello Way',
        'city': 'Boise',
        'state': 'ID',
        'zip_code' : 12345
    },
    'shopping_cart' : ['foam roller', 'couch', 'eye drops', 'mouse', 'mouse pad']
}
console.log(humanObj.name)
console.log(humanObj.phone_num)
console.log(humanObj.height)
console.log(humanObj.age)
console.log(humanObj.address.city)
console.log(humanObj.address.street_address)
console.log(humanObj.address.state)
console.log(humanObj.address.zip_code)
console.log(humanObj.shopping_cart[2])
// for(var i = 0; i < humanObj.shopping_cart.length; i++){
//     console.log(humanObj.shopping_cart[i])
// }
// KEY -> VALUE

var studentList = [
    {
        'name':'Edward Im',
        'age' : 29
    },
    {
        'name':'Jim Bo',
        'age' : 34
    },
    {
        'name':'Jane Doe',
        'age' : 32
    },
]
for(var i = 0; i < studentList.length; i++){
    
}

console.log(studentList[0].name)
console.log(studentList[1].age)
console.log(studentList[2])

// NESTED ELEMENTS
// DATA TRAVERSAL