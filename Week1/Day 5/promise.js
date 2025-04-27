
//understanding promises in js

const fs = require('fs');

//ugly way
//my own asynchronous function
function rojinaReadFile(cb) {
    fs.readFile('a.txt', 'utf-8', function (err, data){
        cb(data);

})
}
//callback function to call
function onDone(data)
{
    console.log(data)
}  

rojinaReadFile(onDone);



////cleaner way 
function rojinaReadFile() {
   
    return new Promise(function( resolve)  {
        console.log("inside promise");

    fs.readFile('a.txt', 'utf-8', function (err, data) {
        console.log("before resolve");
        resolve(data);

});
})
}

function onDone(data)
{
    console.log(data)
}  

var a = rojinaReadFile();

a.then(onDone);



// =>pending,resolved

// here's a simple promise that immediately resolves

let p = new Promise(function(resolve){
    resolve("Hey!!");
});

p.then(function(){
    console.log(p);
})



//simple function
function kiratAsyncFunction(callback){
    setTimeout(callback,2000);
    
}

rojinaAsyncFunction(function(){
    console.log("hello!");
});

//intimidating async function                  
function rojinaAsyncFunction(){               
    let p = new Promise(function(resolve)
{
    setTimeout(resolve,2000);
});

return p;
}

const value = rojinaAsyncFunction();
value.then(function()
{
    console.log("hii there");
})