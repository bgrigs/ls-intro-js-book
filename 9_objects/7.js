// Add a qux property with value 3 to the myObj object we created in the previous exercise. 

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

console.log(myObj);


//Now, examine the following code snippets. Without running this code, can you determine whether these two snippets produce the same output? Why?


let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

/*Solution: Both snippets iterate over myObj. However, the first snippet only iterates over properties that have been specifically assigned to myObj (in this case, qux). The second snippet uses a for/in loop, which iterates over myObj's properties and its prototype's (myProtoObj) properties (qux, foo, bar). */
