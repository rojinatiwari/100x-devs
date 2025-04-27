
//understanding async await

function rojinaAsyncFunction(){               
    let p = new Promise(function(resolve)
{
    //do some async logic here
    setTimeout(function()
{
    resolve("heyy")
},3000)
    
});

return p;
}
async function main(){
    //no callbacks, no .then syntax
   let value = await rojinaAsyncFunction()
   console.log("hey 1");
   console.log(value);
    

}

main();
console.log("after main");