//Lets introduce an asynchrnous function

//setTimeout 
// setTimeout is a function that executes a callback after a specified delay (in milliseconds).
function findSum(n){
    let ans = 0;
    for(let i =0;i<n;i++){
        ans+= i;
    }
    return ans;
}

function findSumTill100(){
    
    console.log(findSum(100));
}


//busy waiting 
function syncSleep()
{
    let a = 1;
    for(let i = 0;i<1000000;i++)
    {
        a++;
    }
}


// syncSleep();
//calling an async function
setTimeout(findSumTill100,1000)
console.log("hello world");



//fs.readFile- to read a file from your filesystem
const fs = require("fs");
//filesystem module

fs.readFile("a.txt","utf-8",function (err, data)  {
    
    console.log(data);
});

console.log("hii there!!");
let a = 0;
//takes very long , longer than the file read
for (let i =0;i<1000000;i++)
{
    a++;
}

console.log("hi there 2");
//fetch-to fetch data from an API 