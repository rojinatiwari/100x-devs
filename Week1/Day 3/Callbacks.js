//example of callback function
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();  // calling the callback function
}

function afterGreet() {
    console.log('Greeting is complete!');
}

greet('Evelyn', afterGreet);

