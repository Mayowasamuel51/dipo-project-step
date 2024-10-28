// Aarry 
const names = ['mayowa', 'dipo', 'shola', 'funke', 'bupe']
/// array has in built method , 
//method are the same thing as functions 

names.pop()
names.unshift('olamide')
console.log(names)



// Object 
// object is all about grouping 
// key values pairs 
//Object does not have  in built methods
/// object you can create you own methods /fucntions


const main_group = {

    name: 'shola',
    age: 21,
    level: 12,
    address: 'london road make up',
    hobbies: ['fighting', 'coding', 'reading'],
    mymethod: function (x) {
        return x * x
    }  //// assigment , explian this code for me 
}


console.log(main_group.mymethod(3))  //explain this code for me 


// () === it means it a method or a function

// Remember you can store data in , 
// Array,
// Object
// Mutiple Object in Array   /// make a research on this 



for(let i = 0; i < names.length; i++){
    console.log(names[i])
}  // explian this code too 